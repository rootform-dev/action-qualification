import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { basename } from 'node:path';

const outputs = JSON.parse(process.env.ROOTFORM_OUTPUTS || '{}');
const operation = process.argv[2];
const expectedCode = process.argv[3];
const expected = operation === 'check' ? ['form', 'result', 'report', 'sarif'] : ['form', 'report', 'html'];
for (const field of expected) {
  assert.equal(typeof outputs[field], 'string', `missing ${field} path`);
  assert.ok(existsSync(outputs[field]), `${field} file missing`);
  assert.ok(statSync(outputs[field]).size > 0, `${field} file empty`);
}
execFileSync('rootform', ['validate', 'form', outputs.form], { stdio: 'pipe' });
assert.equal(outputs.version, '0.1.0-pr.117.1');
if (expectedCode !== undefined) assert.equal(outputs['exit-code'], expectedCode);
if (process.env.ROOTFORM_EXPECT_ARTIFACT === 'true') {
  assert.match(outputs['artifact-id'], /^\d+$/);
  assert.equal(outputs['artifact-url'], `https://github.com/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}/artifacts/${outputs['artifact-id']}`);
}
if (process.env.ROOTFORM_PREVIOUS_FORM) {
  assert.equal(outputs.form, process.env.ROOTFORM_PREVIOUS_FORM, 'saved Form path must be reused');
  assert.equal(createHash('sha256').update(readFileSync(outputs.form)).digest('hex'), process.env.ROOTFORM_PREVIOUS_SHA, 'saved Form changed');
}
const files = Object.fromEntries(expected.map((field) => [field, { name: basename(outputs[field]), bytes: statSync(outputs[field]).size, sha256: createHash('sha256').update(readFileSync(outputs[field])).digest('hex') }]));
const evidence = { operation, version: outputs.version, exitCode: outputs['exit-code'] ?? null, artifactId: outputs['artifact-id'] ?? null, artifactUrl: outputs['artifact-url'] ?? null, files };
if (process.env.ROOTFORM_EVIDENCE_FILE) writeFileSync(process.env.ROOTFORM_EVIDENCE_FILE, JSON.stringify(evidence, null, 2)+'\n');
console.log(JSON.stringify(evidence));
