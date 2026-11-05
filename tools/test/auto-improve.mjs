// Auto-improve generic sources: run the spec wizard, merge its selectors into sources/<id>/src/config.js,
// rebuild + live-test those sources, and keep a change only if the source gets better.
// Usage: node tools/test/auto-improve.mjs <list.json> <out.json>    list: [{id,type,base,tpl}]
import fs from 'node:fs'; import path from 'node:path'; import { execFileSync } from 'node:child_process'; import { fileURLToPath } from 'node:url';
import { wizard } from './spec-wizard.mjs';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [, , inF, outF] = process.argv;
const list = JSON.parse(fs.readFileSync(inF, 'utf8')).filter(x => x.tpl === 'generic');
const oldRes = Object.fromEntries((JSON.parse(fs.readFileSync(path.join(ROOT, 'data/test-results.json'), 'utf8')).results || []).map(r => [r.id, r]));
const STEPS = ['popular', 'search', 'detail', 'chapters', 'content', 'pages', 'videos'];
const score = r => r ? STEPS.filter(k => r.steps[k] && r.steps[k].ok).length + (r.pass ? 10 : 0) : 0;
const cfgPath = id => path.join(ROOT, 'sources', id, 'src', 'config.js');
function splitCfg(txt) { const i = txt.indexOf('var G = '); if (i < 0) return null; const tail = txt.slice(i + 8).trim().replace(/;\s*$/, ''); try { return { head: txt.slice(0, i), G: JSON.parse(tail) }; } catch { return null; } }
const results = []; const orig = {};
const q = [...list];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (q.length) {
    const it = q.shift(); const rec = { id: it.id, type: it.type, oldScore: score(oldRes[it.id]) };
    try {
      const w = await wizard(it); rec.wizard = { n: w.n, nch: w.nch, contentLen: w.contentLen, npages: w.npages, items: (w.items || []).slice(0, 2), search: w.search, final: w.final };
      if (!w.G || !w.G.item) { rec.skip = 'no cards'; results.push(rec); continue; }
      const txt = fs.readFileSync(cfgPath(it.id), 'utf8'); const c = splitCfg(txt); if (!c) { rec.skip = 'config not generic'; results.push(rec); continue; }
      const patch = {}; for (const k of ['item', 'link', 'title', 'cover', 'd_title', 'd_cover', 'd_desc', 'ch_list', 'content', 'pages']) if (w.G[k]) patch[k] = w.G[k];
      if (w.search) patch.search = w.search;
      let head = c.head; const fin = new URL(w.final); const curBase = (/var BASE_URL = "([^"]+)"/.exec(head) || [])[1] || '';
      if (curBase && new URL(curBase).host !== fin.host) { rec.newBase = fin.origin; head = head.replace(/var BASE_URL = "[^"]+"/, `var BASE_URL = "${fin.origin}"`); }
      orig[it.id] = txt; rec.patch = patch;
      fs.writeFileSync(cfgPath(it.id), head + 'var G = ' + JSON.stringify({ ...c.G, ...patch }, null, 1) + ';\n');
    } catch (e) { rec.error = String(e && e.message || e).slice(0, 150); }
    results.push(rec);
  }
}));
const ids = Object.keys(orig);
console.log('patched', ids.length);
if (ids.length) {
  execFileSync(process.execPath, [path.join(ROOT, 'tools/build/build-all.mjs'), '--only', ids.join(',')], { cwd: ROOT, stdio: 'inherit' });
  try { execFileSync(process.execPath, [path.join(ROOT, 'tools/test/run-tests.mjs'), '--only', ids.join(','), '--conc', '6'], { cwd: ROOT, stdio: 'inherit', timeout: 1500000 }); } catch (e) { console.log('tests:', e.message); }
  const now = Object.fromEntries((JSON.parse(fs.readFileSync(path.join(ROOT, 'test-results.json'), 'utf8')).results || []).map(r => [r.id, r]));
  for (const r of results) {
    if (!orig[r.id]) continue;
    const n = now[r.id]; r.newScore = score(n); r.pass = !!(n && n.pass);
    r.steps = n ? Object.fromEntries(Object.entries(n.steps).map(([k, v]) => [k, v.ok ? 'ok' : v.error])) : null;
    r.kept = r.newScore > r.oldScore;
    if (!r.kept) fs.writeFileSync(cfgPath(r.id), orig[r.id]);
  }
}
fs.writeFileSync(outF, JSON.stringify(results, null, 1));
console.log('kept', results.filter(r => r.kept).length, 'pass', results.filter(r => r.pass).length, 'of', results.length);
process.exit(0);
