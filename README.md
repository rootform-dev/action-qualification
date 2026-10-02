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

Fork qualification uses a pull request into the public upstream repository:
the integrated Action keeps its Form, reports, artifacts and Summary with the
fork's reduced token, while PR commenting is skipped.

The PR report currently qualifies the public CLI Markdown source at
`086dc1f16ffe57694ff806df8ff51cf1d0cf072e`. A published binary produces the
actual plan Form and negative Policy result, then a small public CLI embedding
reopens that saved evidence and exports complete Markdown/JSON. Compilation and
Policy evaluation are unavailable in the embedding. A recorded Policy answer
is reused only for its exact Form digest, stage and selection; Form and Policy
result bytes must remain identical. Shared reporting functions
from the exact Action commit publish the generated report to Summary and the
single protected bot comment. This qualifies source presentation, not a new
distributed candidate. The artifact records both sources and report digests.
