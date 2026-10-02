# Rootform Markdown review gallery

Actual public CLI formatters, synthetic test fixtures. Reports below are copied verbatim from test goldens; no hand-edited tables.

[Uncertainty and planned changes](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/uncertainty.md) | [Policy violation, both sides](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/policies.md) | [Plan](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/plan.md) | [State](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/state.md) | [Comparison and Before/After provenance](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/comparison.md) | [Drift and net change](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/drift-net.md) | [Changes and long lists](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/changes.md) | [Policy result with one side not evaluated](https://github.com/rootform-dev/rootform/blob/57ba8e3f9b5692bc26fb3a193d8f2a4e26476fdd/cli/internal/app/testdata/review/policy-failed.md)

### Uncertainty and planned changes

## Rootform architecture

**76 instances, 18 Relations, 68 Contexts, and 14 Contributions added.**

Plan analyzed. Planned changes compare **Refreshed** with **Planned**.

**Uncertainty**

| Stage | Indeterminate closures | Unavailable | Unknown until apply |
| --- | ---: | ---: | ---: |
| Planned | 27 | 26 | 1 |

| Change | Instances | Relations | Contexts | Contributions |
| --- | ---: | ---: | ---: | ---: |
| Added | 76 | 18 | 68 | 14 |
| Removed | 0 | 0 | 0 | 0 |

### Planned changes

<details>
<summary>Instances: 76 added (10 of 76 shown)</summary>

- `object.added.00`
- `object.added.01`
- `object.added.02`
- `object.added.03`
- `object.added.04`
- `object.added.05`
- `object.added.06`
- `object.added.07`
- `object.added.08`
- `object.added.09`

</details>

<details>
<summary>Relations: 18 added (10 of 18 shown)</summary>

- **routes-to** from `object.part.00` to `object.whole`
- **routes-to** from `object.part.01` to `object.whole`
- **routes-to** from `object.part.02` to `object.whole`
- **routes-to** from `object.part.03` to `object.whole`
- **routes-to** from `object.part.04` to `object.whole`
- **routes-to** from `object.part.05` to `object.whole`
- **routes-to** from `object.part.06` to `object.whole`
- **routes-to** from `object.part.07` to `object.whole`
- **routes-to** from `object.part.08` to `object.whole`
- **routes-to** from `object.part.09` to `object.whole`

</details>

<details>
<summary>Contexts: 68 added (10 of 68 shown)</summary>

- **network**: `object.part.00` within `object.whole`
- **network**: `object.part.01` within `object.whole`
- **network**: `object.part.02` within `object.whole`
- **network**: `object.part.03` within `object.whole`
- **network**: `object.part.04` within `object.whole`
- **network**: `object.part.05` within `object.whole`
- **network**: `object.part.06` within `object.whole`
- **network**: `object.part.07` within `object.whole`
- **network**: `object.part.08` within `object.whole`
- **network**: `object.part.09` within `object.whole`

</details>

<details>
<summary>Contributions: 14 added (10 of 14 shown)</summary>

- `object.part.00` contributes to `object.whole`
- `object.part.01` contributes to `object.whole`
- `object.part.02` contributes to `object.whole`
- `object.part.03` contributes to `object.whole`
- `object.part.04` contributes to `object.whole`
- `object.part.05` contributes to `object.whole`
- `object.part.06` contributes to `object.whole`
- `object.part.07` contributes to `object.whole`
- `object.part.08` contributes to `object.whole`
- `object.part.09` contributes to `object.whole`

</details>

### Provenance

- **Input:** `plan.json`

Each list above shows at most 10 entries. A report written with `--details` lists every entry.

### Policy violation, both sides

## Rootform Policies

**Overall verdict: VIOLATED**

Evaluation scope: **Both sides**. 1 Policy selected.

| Side | Verdict | Origin | Stage | Evaluations | Violated | Indeterminate | Passed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Before | VIOLATED | State | Recorded | 1 | 1 | 0 | 0 |
| After | PASSED | Plan | Planned | 1 | 0 | 0 | 1 |

### Before

#### `review.policy.requirement`

**Requirement:** Each instance must satisfy the recorded requirement.

**Violated: 1 evaluation**

- `object.before`

### After

All selected evaluations passed.

### Provenance

- **Input:** `comparison.json`

### Plan

<details>
<summary>Open Plan</summary>

## Rootform architecture

**1 instance, 1 external endpoint, and 1 Contribution added.**

Plan analyzed. Planned changes compare **Refreshed** with **Planned**.

| Change | Instances | External endpoints | Contributions |
| --- | ---: | ---: | ---: |
| Added | 1 | 1 | 1 |
| Removed | 0 | 0 | 0 |

### Reported drift

No drift reported in this plan. The export does not establish the refresh scope.

### Net change

Same determined changes as Planned changes.

### Planned changes

**Instances: 1 added**

- `local_file.c`

**External endpoints: 1 added**

- `external file`

**Contributions: 1 added**

- `local_file.c` contributes to `external file`

### Planned architecture

- **Instances:** 3
- **Interpreted:** 3
- **Contributions:** 2
- **External endpoints:** 1

### Provenance

- **Input:** `plan.json`
- **Producer:** Terraform 1.12.2 \(attested\)
- **Plan completeness:** Complete, as reported in the plan
- **Enrichment:** None; the plan JSON was analyzed alone
- **Stage:** Planned
- **Stages:** Recorded \(reconstructed\), Refreshed, Planned

</details>

### State

<details>
<summary>Open State</summary>

## Rootform architecture

**Recorded architecture: 2 instances and 1 Contribution.**

State analyzed.

### Recorded architecture

- **Instances:** 2
- **Interpreted:** 2
- **Contributions:** 1

### Provenance

- **Input:** `state.json`
- **Producer:** Terraform or OpenTofu 1.10.7
- **Stage:** Recorded

</details>

### Comparison and Before/After provenance

<details>
<summary>Open Comparison and Before/After provenance</summary>

## Rootform architecture

**1 instance, 1 external endpoint, and 1 Contribution added.**

Comparison Form loaded. Differences compare the **Recorded** stage of **Before** with the **Planned** stage of **After**.

| Change | Instances | External endpoints | Contributions |
| --- | ---: | ---: | ---: |
| Added | 1 | 1 | 1 |
| Removed | 0 | 0 | 0 |

### Differences

**Instances: 1 added**

- `local_file.c`

**External endpoints: 1 added**

- `external file`

**Contributions: 1 added**

- `local_file.c` contributes to `external file`

### Architecture

| Side | Instances | Interpreted | Contributions |
| --- | ---: | ---: | ---: |
| Before | 2 | 2 | 1 |
| After | 3 | 3 | 2 |

### Provenance

- **Input:** `comparison.json`
- **Form:** Comparison, saved by rootform 0.1.0

| Field | Before | After |
| --- | --- | --- |
| Origin | State | Plan |
| Producer | Terraform or OpenTofu 1.10.7 | Terraform 1.12.2 \(attested\) |
| Enrichment | Not applicable | None |
| Stage | Recorded | Planned |

</details>

### Drift and net change

<details>
<summary>Open Drift and net change</summary>

## Rootform architecture

**76 instances, 18 Relations, 68 Contexts, and 14 Contributions added.**

Plan analyzed. Planned changes compare **Refreshed** with **Planned**.

| Change | Instances | Relations | Contexts | Contributions |
| --- | ---: | ---: | ---: | ---: |
| Added | 76 | 18 | 68 | 14 |
| Removed | 0 | 0 | 0 | 0 |

### Reported drift

**1 drift entry reported: 1 architectural.**

Drift compares **Recorded** with **Refreshed**. The export does not establish the refresh scope.

Architectural effect: no architectural difference determined under the selected Dialects.

| Stage | Indeterminate closures | Unavailable |
| --- | ---: | ---: |
| Recorded | 1 | 1 |
| Refreshed | 0 | 0 |

- `object.drift`: changes the architecture; 1 fact change

### Net change

**2 instances added, 1 removed.**

Net change compares **Recorded** with **Planned**.

| Change | Instances |
| --- | ---: |
| Added | 2 |
| Removed | 1 |

**Instances: 2 added, 1 removed**

- Added
  - `object.added.00`
  - `object.added.01`
- Removed
  - `object.removed.00`

### Planned changes

<details>
<summary>Instances: 76 added (10 of 76 shown)</summary>

- `object.added.00`
- `object.added.01`
- `object.added.02`
- `object.added.03`
- `object.added.04`
- `object.added.05`
- `object.added.06`
- `object.added.07`
- `object.added.08`
- `object.added.09`

</details>

<details>
<summary>Relations: 18 added (10 of 18 shown)</summary>

- **routes-to** from `object.part.00` to `object.whole`
- **routes-to** from `object.part.01` to `object.whole`
- **routes-to** from `object.part.02` to `object.whole`
- **routes-to** from `object.part.03` to `object.whole`
- **routes-to** from `object.part.04` to `object.whole`
- **routes-to** from `object.part.05` to `object.whole`
- **routes-to** from `object.part.06` to `object.whole`
- **routes-to** from `object.part.07` to `object.whole`
- **routes-to** from `object.part.08` to `object.whole`
- **routes-to** from `object.part.09` to `object.whole`

</details>

<details>
<summary>Contexts: 68 added (10 of 68 shown)</summary>

- **network**: `object.part.00` within `object.whole`
- **network**: `object.part.01` within `object.whole`
- **network**: `object.part.02` within `object.whole`
- **network**: `object.part.03` within `object.whole`
- **network**: `object.part.04` within `object.whole`
- **network**: `object.part.05` within `object.whole`
- **network**: `object.part.06` within `object.whole`
- **network**: `object.part.07` within `object.whole`
- **network**: `object.part.08` within `object.whole`
- **network**: `object.part.09` within `object.whole`

</details>

<details>
<summary>Contributions: 14 added (10 of 14 shown)</summary>

- `object.part.00` contributes to `object.whole`
- `object.part.01` contributes to `object.whole`
- `object.part.02` contributes to `object.whole`
- `object.part.03` contributes to `object.whole`
- `object.part.04` contributes to `object.whole`
- `object.part.05` contributes to `object.whole`
- `object.part.06` contributes to `object.whole`
- `object.part.07` contributes to `object.whole`
- `object.part.08` contributes to `object.whole`
- `object.part.09` contributes to `object.whole`

</details>

### Provenance

- **Input:** `plan.json`

Each list above shows at most 10 entries. A report written with `--details` lists every entry.

</details>

### Changes and long lists

<details>
<summary>Open Changes and long lists</summary>

## Rootform architecture

**76 instances, 18 Relations, 68 Contexts, and 14 Contributions added.**

Plan analyzed. Planned changes compare **Refreshed** with **Planned**.

| Change | Instances | Relations | Contexts | Contributions |
| --- | ---: | ---: | ---: | ---: |
| Added | 76 | 18 | 68 | 14 |
| Removed | 0 | 0 | 0 | 0 |

### Planned changes

<details>
<summary>Instances: 76 added (10 of 76 shown)</summary>

- `object.added.00`
- `object.added.01`
- `object.added.02`
- `object.added.03`
- `object.added.04`
- `object.added.05`
- `object.added.06`
- `object.added.07`
- `object.added.08`
- `object.added.09`

</details>

<details>
<summary>Relations: 18 added (10 of 18 shown)</summary>

- **routes-to** from `object.part.00` to `object.whole`
- **routes-to** from `object.part.01` to `object.whole`
- **routes-to** from `object.part.02` to `object.whole`
- **routes-to** from `object.part.03` to `object.whole`
- **routes-to** from `object.part.04` to `object.whole`
- **routes-to** from `object.part.05` to `object.whole`
- **routes-to** from `object.part.06` to `object.whole`
- **routes-to** from `object.part.07` to `object.whole`
- **routes-to** from `object.part.08` to `object.whole`
- **routes-to** from `object.part.09` to `object.whole`

</details>

<details>
<summary>Contexts: 68 added (10 of 68 shown)</summary>

- **network**: `object.part.00` within `object.whole`
- **network**: `object.part.01` within `object.whole`
- **network**: `object.part.02` within `object.whole`
- **network**: `object.part.03` within `object.whole`
- **network**: `object.part.04` within `object.whole`
- **network**: `object.part.05` within `object.whole`
- **network**: `object.part.06` within `object.whole`
- **network**: `object.part.07` within `object.whole`
- **network**: `object.part.08` within `object.whole`
- **network**: `object.part.09` within `object.whole`

</details>

<details>
<summary>Contributions: 14 added (10 of 14 shown)</summary>

- `object.part.00` contributes to `object.whole`
- `object.part.01` contributes to `object.whole`
- `object.part.02` contributes to `object.whole`
- `object.part.03` contributes to `object.whole`
- `object.part.04` contributes to `object.whole`
- `object.part.05` contributes to `object.whole`
- `object.part.06` contributes to `object.whole`
- `object.part.07` contributes to `object.whole`
- `object.part.08` contributes to `object.whole`
- `object.part.09` contributes to `object.whole`

</details>

### Provenance

- **Input:** `plan.json`

Each list above shows at most 10 entries. A report written with `--details` lists every entry.

</details>

### Policy result with one side not evaluated

<details>
<summary>Open Policy result with one side not evaluated</summary>

## Rootform Policies

**Overall verdict: VIOLATED**

Evaluation scope: **Both sides**. 1 Policy selected.

| Side | Verdict | Origin | Stage | Evaluations | Violated | Indeterminate | Passed |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Before | VIOLATED | State | Recorded | 1 | 1 | 0 | 0 |
| After | NOT EVALUATED | Plan | Planned | - | - | - | - |

### Before

#### `review.policy.requirement`

**Requirement:** Each instance must satisfy the recorded requirement.

**Violated: 1 evaluation**

- `object.before`

### After

#### Not evaluated

- This side could not be evaluated.

### Provenance

- **Input:** `comparison.json`

</details>

---

The plan, state and comparison command tests also preserve the saved Form JSON byte for byte and perform no backend export. This PR changes CLI source; distributed binaries receive the presentation when they consume this commit.
