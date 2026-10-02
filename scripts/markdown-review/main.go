package main

import (
	"context"
	"fmt"
	"io"
	"os"

	"github.com/rootform-dev/rootform/cli"
	"github.com/rootform-dev/rootform/cli/backend"
	"github.com/rootform-dev/rootform/cli/form"
)

// This qualification harness reopens one saved Form through the public CLI.
// It has no compiler, selection loader or Policy evaluator.
type savedFormBackend struct{ backend.Backend }

type savedFormSession struct{ backend.Session }

func (savedFormBackend) Open(context.Context, backend.Selection, io.Writer) backend.Session {
	return savedFormSession{}
}

func (savedFormSession) Compile(context.Context, backend.Export) (backend.Compiled, error) {
	return backend.Compiled{}, fmt.Errorf("qualification requires a saved Form; compilation is unavailable")
}

func (savedFormSession) Presentation(context.Context, *form.InputForm) backend.Presentation {
	return backend.Presentation{}
}

func main() {
	if len(os.Args) != 4 {
		fmt.Fprintln(os.Stderr, "usage: markdown-review FORM MARKDOWN REOPENED_FORM")
		os.Exit(2)
	}
	os.Exit(cli.Run(cli.Env{
		Args:  []string{"run", os.Args[1], "--no-serve", "-o", os.Args[2], "-o", os.Args[3]},
		Stdin: os.Stdin, Stdout: os.Stdout, Stderr: os.Stderr,
		Getwd: os.Getwd, Getenv: os.Getenv, LookupEnv: os.LookupEnv,
		Backend: savedFormBackend{}, Version: "0.1.0",
	}))
}
