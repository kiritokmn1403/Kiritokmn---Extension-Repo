// After the Android APKs are built: write repo/index.min.json + repo/repo.json (Aniyomi / Nekoyomi / Mihon format)
// and copy APKs/icons to repo/apk, repo/icon.
// Usage: node tools/build/aniyomi-index.mjs <apkDir> <signingKeyFingerprintSha256> [versionCode]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [apkDir, fingerprint, codeArg] = process.argv.slice(2);
const code = +(codeArg || 1);
const OUT = path.join(ROOT, 'repo');
fs.mkdirSync(path.join(OUT, 'apk'), { recursive: true }); fs.mkdirSync(path.join(OUT, 'icon'), { recursive: true });
const list = mod => fl => JSON.parse(fs.readFileSync(path.join(ROOT, 'android', mod, 'src', fl, 'assets/vb/sources.json'), 'utf8'));
const defs = [
  { mod: 'anime', fl: 'sfw', pkg: 'eu.kanade.tachiyomi.animeextension.all.kiritokmn', name: 'Aniyomi: Kiritokmn Phim', ver: `14.${code}`, nsfw: 0 },
  { mod: 'anime', fl: 'nsfw', pkg: 'eu.kanade.tachiyomi.animeextension.all.kiritokmn.nsfw', name: 'Aniyomi: Kiritokmn Phim 18+', ver: `14.${code}`, nsfw: 1 },
  { mod: 'manga', fl: 'sfw', pkg: 'eu.kanade.tachiyomi.extension.all.kiritokmn', name: 'Tachiyomi: Kiritokmn Truyện', ver: `1.4.${code}`, nsfw: 0 },
  { mod: 'manga', fl: 'nsfw', pkg: 'eu.kanade.tachiyomi.extension.all.kiritokmn.nsfw', name: 'Tachiyomi: Kiritokmn Truyện 18+', ver: `1.4.${code}`, nsfw: 1 },
];
const index = [];
for (const d of defs) {
  const apkName = `${d.pkg}-v${d.ver}.apk`;
  const built = fs.readdirSync(apkDir).find(f => f.includes(d.mod) && f.includes(d.fl) && f.endsWith('.apk') && !(d.fl === 'sfw' && f.includes('nsfw')));
  if (!built) { console.error('missing apk for', d.mod, d.fl); continue; }
  fs.copyFileSync(path.join(apkDir, built), path.join(OUT, 'apk', apkName));
  fs.copyFileSync(path.join(ROOT, 'android', d.mod, 'src/main/res/mipmap-xxxhdpi/ic_launcher.png'), path.join(OUT, 'icon', d.pkg + '.png'));
  const srcs = list(d.mod)(d.fl);
  const langs = [...new Set(srcs.map(s => s.lang))];
  index.push({ name: d.name, pkg: d.pkg, apk: apkName, lang: langs.length === 1 ? langs[0] : 'all', code, version: d.ver, nsfw: d.nsfw,
    sources: srcs.map(s => ({ name: s.name, lang: s.lang, id: s.sourceId, baseUrl: s.baseUrl })) });
}
fs.writeFileSync(path.join(OUT, 'index.min.json'), JSON.stringify(index));
fs.writeFileSync(path.join(OUT, 'repo.json'), JSON.stringify({ meta: { name: 'Kiritokmn Extension Repo', shortName: 'Kiritokmn', website: 'https://github.com/kiritokmn1403/Kiritokmn---Extension-Repo', signingKeyFingerprint: String(fingerprint || '').toLowerCase().replace(/[^0-9a-f]/g, '') } }, null, 1));
console.log('index.min.json:', index.length, 'apks');
