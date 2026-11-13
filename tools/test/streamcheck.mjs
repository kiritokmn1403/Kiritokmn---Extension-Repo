// 0.0.4: check that the stream URL a source returns is actually playable with the headers it returns
import path from 'node:path'; import { pathToFileURL } from 'node:url';
const ROOT = process.cwd(); const ids = process.argv.slice(2);
const { makeEngineFor } = await import(pathToFileURL(path.join(ROOT, '.build/_runtime.mjs')).href);
for (const id of ids) {
  try {
    const mod = await import(pathToFileURL(path.join(ROOT, '.build/test', id + '.mjs')).href);
    const e = makeEngineFor(mod.META, mod.SCRIPTS, {});
    const p = await e.popular(1); const link = p.items[0].link; const ch = await e.chapters(link); const v = await e.videos(ch[0].url);
    console.log('==', id, link, '->', v.length, 'streams');
    for (const s of v.slice(0, 2)) {
      for (const [lab, h] of [['with', s.headers || {}], ['none', {}]]) {
        const r = await fetch(s.url, { headers: h }); const t = (await r.text()).slice(0, 120).replace(/\s+/g, ' ');
        console.log('  ', lab, r.status, s.url.slice(0, 90), JSON.stringify(s.headers || {}).slice(0, 150), '|', t);
      }
    }
  } catch (err) { console.log('==', id, 'ERR', err.message); }
}
process.exit(0);
