// YomiHub 0.5.3 (sheet "YomiHub Update" mục 2): the website extensions that
// used to be bundled inside YomiHub now live in this repo.
//   sources-yomihub/meta.json + <asset>.js + _common.js  (copied from the YomiHub overlay)
//   -> repo/yomihub/<asset>   (self-contained Mangayomi JS: header + _common.js + body)
//   -> entries in repo/index.json with the SAME ids as the old bundled copies
//      (920260001…), so an installed copy is updated from this repo.
// vBook-converted Mangayomi entries for the same website are dropped from
// index.json only (they stay in the vBook / LNReader / Aniyomi formats), so the
// YomiHub/Mangayomi store does not list one site twice.
// Usage: node tools/build/yomihub-sources.mjs   (also run at the end of build-all.mjs)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function buildYomihubSources(root, base) {
  const SRC = path.join(root, 'sources-yomihub');
  const OUT = path.join(root, 'repo', 'yomihub');
  if (!fs.existsSync(path.join(SRC, 'meta.json'))) return { added: 0, dropped: [] };
  const meta = JSON.parse(fs.readFileSync(path.join(SRC, 'meta.json'), 'utf8'));
  const common = fs.readFileSync(path.join(SRC, '_common.js'), 'utf8');
  fs.mkdirSync(OUT, { recursive: true });
  const host = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  const entries = [];
  for (const s of meta.sources) {
    const body = fs.readFileSync(path.join(SRC, s.asset), 'utf8');
    const m = {
      name: s.name, lang: s.lang, id: s.id, baseUrl: s.baseUrl, apiUrl: '', iconUrl: s.iconUrl || '',
      typeSource: 'single', itemType: s.itemType, isNsfw: !!s.nsfw, version: meta.version,
      dateFormat: '', dateFormatLocale: '', pkgPath: `repo/yomihub/${s.asset}`,
    };
    const code = `const mangayomiSources = [${JSON.stringify(m)}];\n${common}\n${body}\n`;
    fs.writeFileSync(path.join(OUT, s.asset), code);
    entries.push({ ...m, hasCloudflare: false, sourceCodeUrl: `${base}/repo/yomihub/${s.asset}`, isManga: s.itemType === 0,
      isFullData: false, appMinVerReq: '0.5.0', additionalParams: '', sourceCodeLanguage: 1,
      notes: (s.notes ? s.notes + ' ' : '') + `(YomiHub ${meta.version} – Kiritokmn Extension Repo)` });
  }
  const idxPath = path.join(root, 'repo', 'index.json');
  let idx = JSON.parse(fs.readFileSync(idxPath, 'utf8'));
  const ours = new Set(entries.map(e => e.itemType + '|' + host(e.baseUrl)));
  const ids = new Set(entries.map(e => e.id));
  const dropped = idx.filter(e => !ids.has(e.id) && ours.has(e.itemType + '|' + host(e.baseUrl))).map(e => e.name);
  idx = idx.filter(e => !ids.has(e.id) && !ours.has(e.itemType + '|' + host(e.baseUrl)));
  idx.push(...entries);
  fs.writeFileSync(idxPath, JSON.stringify(idx));
  return { added: entries.length, dropped, total: idx.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
  const BASE = 'https://raw.githubusercontent.com/kiritokmn1403/Kiritokmn---Extension-Repo/main';
  console.log(JSON.stringify(buildYomihubSources(ROOT, BASE), null, 1));
}
