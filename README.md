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
`7f0ef17c418f76754ddd20d6a48310a0b257d17b`. A published binary produces the
actual plan Form, then a small public CLI embedding reopens that saved Form
and exports Markdown/JSON. Compilation is unavailable in the embedding;
Form bytes must remain identical. The unchanged single-side negative Policy
report still comes from the published binary. Shared reporting functions
from the exact Action commit publish the generated report to Summary and the
single protected bot comment. This qualifies source presentation, not a new
distributed candidate. The artifact records both sources and report digests.
