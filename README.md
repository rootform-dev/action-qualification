# Rootform Action public qualification

Synthetic external consumers for `rootform-dev/action`. Every workflow runs on
this public repository and installs the actual published Rootform release.
No compiler source, locally rebuilt binary, Terraform execution or cloud
credentials are involved.

Fixtures come from the public Rootform distribution commit
`74bd643f3001a37f8b4f881c0ae33db047b6aba3`; the exact CLI release is
`0.1.0-pr.117.1`. Workflows pin the Action source commit being qualified.

The negative Policy Pack exists only to prove that reports, Forms, artifacts
and Summary survive a genuine Policy violation. The isolated TLS registry
exists only to prove exact external-content preparation and cache reuse in an
offline job. Its TLS key and raw input fixtures are never artifacts.

Review job permissions and artifact inventories before changing tests. Keep
one serialized root reporter per PR; no fork or privileged-target comment.
