# Public qualification repository

This repository contains public synthetic consumers for Rootform Actions.

- Read README.md and inspected workflows before editing.
- Use only public fixed Rootform release assets and public fixture commits.
- Never commit or upload downloaded executables, raw plans/states, saved binary
  plans, credentials, TLS keys, environment dumps or local notes.
- Rootform never runs Terraform/OpenTofu or uses cloud/provider/backend credentials.
- Action source references use exact commits. Major-ref publication is qualified
  separately after the producer's reviewed merge.
- Keep PR reporting in one serialized job. Never grant write credentials to forks.
- Validate workflow syntax and execute fixture scripts locally before hosted CI.
- Change your own branch and open a PR into dev; no direct dev/main pushes.
- Record exact source, release, run, artifact and comment identities in public
  evidence, without absolute personal paths or secrets.
