// After the Android APKs are built: write repo/index.min.json + repo/repo.json (Aniyomi / Nekoyomi / Mihon format)
// and copy APKs/icons to repo/apk, repo/icon. 0.0.5: one APK per source (android/{anime,manga}/flavors.json).
// Usage: node tools/build/aniyomi-index.mjs <signingKeyFingerprintSha256>
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const fingerprint = process.argv[2];
const OUT = path.join(ROOT, 'repo'), AND = path.join(ROOT, 'android');
fs.mkdirSync(path.join(OUT, 'apk'), { recursive: true }); fs.mkdirSync(path.join(OUT, 'icon'), { recursive: true });
const index = [], keepApk = new Set(), keepIcon = new Set(), missing = [];
let bytes = 0;
for (const mod of ['anime', 'manga']) {
  const flavors = JSON.parse(fs.readFileSync(path.join(AND, mod, 'flavors.json'), 'utf8'));
  for (const f of flavors) {
    const dir = path.join(AND, mod, 'build/outputs/apk', f.flavor, 'release');
    const built = fs.existsSync(dir) ? fs.readdirSync(dir).find(x => x.endsWith('.apk')) : null;
    if (!built) { missing.push(f.pkg); continue; }
    const apkName = `${f.pkg}-v${f.versionName}.apk`;
    fs.copyFileSync(path.join(dir, built), path.join(OUT, 'apk', apkName)); keepApk.add(apkName);
    bytes += fs.statSync(path.join(OUT, 'apk', apkName)).size;
    fs.copyFileSync(path.join(AND, mod, 'gen', f.flavor, 'res/mipmap-xxxhdpi/ic_launcher.png'), path.join(OUT, 'icon', f.pkg + '.png')); keepIcon.add(f.pkg + '.png');
    index.push({ name: f.label, pkg: f.pkg, apk: apkName, lang: f.lang, code: f.versionCode, version: f.versionName, nsfw: f.nsfw,
      sources: [{ name: f.name, lang: f.lang, id: f.sourceId, baseUrl: f.baseUrl }] });
  }
}
if (missing.length) console.error('MISSING apk for', missing.length, 'flavors:', missing.join(', '));
// drop APKs / icons of older versions and of removed sources (incl. the 4 bundle APKs shipped before 0.0.5)
let stale = 0;
for (const f of fs.readdirSync(path.join(OUT, 'apk'))) if (!keepApk.has(f)) { fs.rmSync(path.join(OUT, 'apk', f)); stale++; }
for (const f of fs.readdirSync(path.join(OUT, 'icon'))) if (!keepIcon.has(f)) { fs.rmSync(path.join(OUT, 'icon', f)); stale++; }
fs.writeFileSync(path.join(OUT, 'index.min.json'), JSON.stringify(index));
fs.writeFileSync(path.join(OUT, 'repo.json'), JSON.stringify({ meta: { name: 'Kiritokmn Extension Repo', shortName: 'Kiritokmn', website: 'https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo', signingKeyFingerprint: String(fingerprint || '').toLowerCase().replace(/[^0-9a-f]/g, '') } }, null, 1));
console.log(`index.min.json: ${index.length} apks, ${(bytes / 1048576).toFixed(1)} MB in repo/apk, ${stale} stale files removed`);
if (missing.length) process.exit(1);
