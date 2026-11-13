// 0.0.4: check that the stream URL a source returns is actually playable with the headers it returns.
// 0.0.5: goes down to the first media segment of HLS playlists (also data: URIs) — see streamprobe.mjs.
// Usage: node tools/test/streamcheck.mjs <id> [<id> ...]      (run after build-all; needs the real network)
import path from 'node:path'; import { pathToFileURL } from 'node:url';
import { probeStream } from './streamprobe.mjs';
const ROOT = process.cwd(); const ids = process.argv.slice(2);
const { makeEngineFor } = await import(pathToFileURL(path.join(ROOT, '.build/_runtime.mjs')).href);
for (const id of ids) {
  try {
    const mod = await import(pathToFileURL(path.join(ROOT, '.build/test', id + '.mjs')).href);
    const e = makeEngineFor(mod.META, mod.SCRIPTS, {});
    const p = await e.popular(1); const link = p.items[0].link; const ch = await e.chapters(link); const v = await e.videos(ch[0].url);
    console.log('==', id, link, '->', v.length, 'streams');
    for (const s of v.slice(0, 2)) {
      const r = await probeStream(s);
      console.log('  ', r.ok ? 'OK  ' : 'FAIL', 'HTTP ' + r.status, r.kind, r.via + (s.http2 ? ' (http2 flag)' : ''), r.segments ? r.segments + ' segs' : '', r.bytes + 'B', r.ct, '|', r.target.slice(0, 110), '| headers', JSON.stringify(s.headers || {}).slice(0, 160), r.error ? '| ' + r.error : '');
      if (r.ok && s.headers && Object.keys(s.headers).length) { const n = await probeStream({ ...s, headers: {} }); console.log('     without headers:', n.ok ? 'OK' : 'FAIL', 'HTTP ' + n.status, n.error || ''); }
    }
  } catch (err) { console.log('==', id, 'ERR', err.message); }
}
process.exit(0);
