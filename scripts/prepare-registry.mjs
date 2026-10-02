import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.env.RUNNER_TEMP;
if (!root) throw new Error('RUNNER_TEMP is required');
const tls = join(root, 'rootform-registry-tls'); mkdirSync(tls);
const env = { ...process.env };
for (const key of Object.keys(env)) if (/^(?:INPUT_|GITHUB_TOKEN$|GH_TOKEN$|ACTIONS_RUNTIME_TOKEN$|ACTIONS_ID_TOKEN_REQUEST_TOKEN$)/i.test(key)) delete env[key];
function command(program, args, additions = {}) {
  return execFileSync(program, args, { env: { ...env, ...additions }, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 120_000 });
}
command('openssl', ['req','-x509','-newkey','rsa:2048','-nodes','-days','1','-subj','/CN=localhost','-addext','subjectAltName=DNS:localhost,IP:127.0.0.1','-keyout',join(tls,'key.pem'),'-out',join(tls,'cert.pem')]);
command('docker',['run','--detach','--name','rootform-action-registry','--publish','127.0.0.1:5000:5000','--mount',`type=bind,source=${tls},target=/tls,readonly`,'-e','REGISTRY_HTTP_TLS_CERTIFICATE=/tls/cert.pem','-e','REGISTRY_HTTP_TLS_KEY=/tls/key.pem','registry:3@sha256:ddf754342cfc8acc51a56d5d0ab6af06826461864460636d8bd5c546dab2a7b8']);
const home = join(root, 'selection-builder-home'); mkdirSync(home);
const project = 'external-project'; mkdirSync(project);
const layout = join(root, 'registry-layout');
const auth = { ROOTFORM_HOME: home, SSL_CERT_FILE: join(tls,'cert.pem') };
command('rootform',['package','policy-packs','fixtures/negative','--to',layout,'--source-url','https://github.com/rootform-dev/action-qualification','--revision',process.env.GITHUB_SHA,'--licenses','Apache-2.0'],auth);
// Wait only for this owned registry's TLS readiness, with a bounded interval.
for (let attempt=0; attempt<20; attempt++) {
  try { command('curl',['--fail','--silent','--cacert',join(tls,'cert.pem'),'https://localhost:5000/v2/']); break; }
  catch { if (attempt===19) throw new Error('Owned TLS registry did not become ready'); await new Promise((resolve)=>setTimeout(resolve,250)); }
}
command('rootform',['publish','policy-packs',layout,'--to','localhost:5000/rootform-action/policies','--format','json'],auth);
command('rootform',['add','policy-packs','localhost:5000/rootform-action/policies:policy-pack-qualification-0.1.0','--project',project,'--format','json'],auth);
writeFileSync(process.env.GITHUB_ENV,`SSL_CERT_FILE=${join(tls,'cert.pem')}\n`,{flag:'a'});
const lock = JSON.parse(readFileSync(join(project,'rootform.lock'),'utf8'));
console.log(JSON.stringify({ sourceManifest: lock.policy_packs[0].source.oci.manifest_digest, contentDigest: lock.policy_packs[0].content_digest }));
