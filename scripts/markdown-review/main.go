package main

import (
	"context"
	"fmt"
	"io"
	"os"
	"reflect"

	"github.com/rootform-dev/rootform/cli"
	"github.com/rootform-dev/rootform/cli/backend"
	"github.com/rootform-dev/rootform/cli/form"
	"github.com/rootform-dev/rootform/cli/policyresult"
)

// Presentation qualification reopens actual saved evidence. It has no compiler
// or evaluator: a recorded Policy answer is reusable only for its exact Form,
// stage and selection. The CLI remains the sole Markdown formatter.
type savedFormBackend struct {
	backend.Backend
	recorded *policyresult.Result
}

type savedFormSession struct {
	backend.Session
	recorded *policyresult.Result
}

func (b savedFormBackend) Open(context.Context, backend.Selection, io.Writer) backend.Session {
	return savedFormSession{recorded: b.recorded}
}

func (savedFormSession) Compile(context.Context, backend.Export) (backend.Compiled, error) {
	return backend.Compiled{}, fmt.Errorf("qualification requires a saved Form; compilation is unavailable")
}

func (savedFormSession) Presentation(context.Context, *form.InputForm) backend.Presentation {
	return backend.Presentation{}
}

func (s savedFormSession) Policies(context.Context, []string) (backend.PolicySet, error) {
	if s.recorded == nil {
		return nil, fmt.Errorf("qualification requires an existing Policy result")
	}
	return recordedPolicies{result: *s.recorded}, nil
}

type recordedPolicies struct{ result policyresult.Result }

func (p recordedPolicies) Packs() []backend.Pack {
	return []backend.Pack{{Record: p.result.Architectures[0].PolicyPacks[0], Policies: p.result.Selection.Policies}}
}

func (p recordedPolicies) Evaluate(_ context.Context, input *form.InputForm, stage form.Stage, selected []string) policyresult.Architecture {
	digest, err := form.Digest(form.Form{Input: input})
	a := p.result.Architectures[0]
	if err != nil || digest != p.result.Form.Digest || a.Digest != digest || stage != a.Stage || !reflect.DeepEqual(selected, p.result.Selection.Policies) {
		return policyresult.ArchitectureUnavailable(len(selected), "EVIDENCE_MISMATCH", "recorded Policy answer does not match the Form, stage or selected Policies")
	}
	return a
}

func execute() error {
	if len(os.Args) < 2 {
		return fmt.Errorf("usage: markdown-review run FORM MARKDOWN REOPENED_FORM | check FORM RESULT MARKDOWN REOPENED_RESULT")
	}
	b := savedFormBackend{}
	version := "0.1.0-pr.117.1"
	var args []string
	expected := 0
	switch {
	case os.Args[1] == "run" && len(os.Args) == 5:
		args = []string{"run", os.Args[2], "--no-serve", "--details", "-o", os.Args[3], "-o", os.Args[4]}
	case os.Args[1] == "check" && len(os.Args) == 6:
		data, err := os.ReadFile(os.Args[3])
		if err != nil {
			return err
		}
		r, err := policyresult.Decode(data)
		if err != nil {
			return err
		}
		if r.Form == nil || r.Scope != policyresult.ScopeInput || r.Form.Origin != "saved" || len(r.Architectures) != 1 || len(r.Architectures[0].PolicyPacks) != 1 || r.Architectures[0].Side != "" {
			return fmt.Errorf("qualification requires one recorded single-architecture check with one Policy Pack")
		}
		b.recorded, version = &r, r.Generator.Version
		expected = policyresult.ExitCode(r.Status)
		args = []string{"check", os.Args[2], "--stage", string(r.Architectures[0].Stage), "--details", "-o", os.Args[4], "-o", os.Args[5]}
	default:
		return fmt.Errorf("invalid presentation qualification arguments")
	}
	code := cli.Run(cli.Env{
		Args:  args,
		Stdin: os.Stdin, Stdout: io.Discard, Stderr: os.Stderr,
		Getwd: os.Getwd, Getenv: os.Getenv, LookupEnv: os.LookupEnv,
		Backend: b, Version: version,
	})
	if code != expected {
		return fmt.Errorf("CLI returned %d; recorded evidence requires %d", code, expected)
	}
	return nil
}

func main() {
	if err := execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(2)
	}
}
