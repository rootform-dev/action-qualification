import assert from 'node:assert/strict';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const home = process.env.ROOTFORM_HOME || join(process.env.RUNNER_TEMP, 'rootform-home');
const marker = '.qualification-excluded-marker';
if (process.argv[2] === 'seed') {
  for (const name of ['cache', 'tmp']) {
    mkdirSync(join(home, name), { recursive: true });
    writeFileSync(join(home, name, marker), 'Synthetic derived content must not enter source cache.\n');
  }
} else {
  assert.ok(readdirSync(join(home, 'policy-packs')).length, 'restored source payload missing');
  for (const name of ['cache', 'tmp']) assert.equal(existsSync(join(home, name, marker)), false, `${name} content leaked through cache`);
  console.log('Verified source restored; synthetic derived contents excluded.');
}
