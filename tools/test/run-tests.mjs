import { fileURLToPath } from 'node:url';
// Live end-to-end test of every built source (Node host = same engine as Mangayomi/LNReader builds).
// popular -> detail -> chapters -> first chapter content/pages/videos. Writes test-results.json.
// Usage: node tools/test/run-tests.mjs [--only a,b] [--conc 4]
import fs from 'node:fs'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2); const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const only = opt('--only') ? new Set(opt('--only').split(',')) : null;
const CONC = +(opt('--conc') || 4);
const dir = path.join(ROOT, '.build');
const { makeEngineFor } = await import(pathToFileURL(path.join(dir, '_runtime.mjs')).href);
const ids = fs.readdirSync(dir).filter(f => f.endsWith('.scripts.js')).map(f => f.slice(0, -11)).filter(i => !i.startsWith('_') && (!only || only.has(i)));
const timeout = (p, ms, what) => Promise.race([p, new Promise((_, r) => setTimeout(() => r(new Error('timeout ' + what)), ms))]);
async function testOne(id) {
  const t0 = Date.now(); const res = { id, steps: {} };
  const step = async (name, fn) => { const s = Date.now(); try { const v = await timeout(fn(), 60000, name); res.steps[name] = { ok: true, ms: Date.now() - s, ...v }; return v; } catch (e) { res.steps[name] = { ok: false, ms: Date.now() - s, error: String(e.message || e).slice(0, 200) }; return null; } };
  try {
    const mod = await import(pathToFileURL(path.join(dir, 'test', id + '.mjs')).href);
    const eng = makeEngineFor(mod.META, mod.SCRIPTS, { log: () => {} }); res.type = mod.META.type; res.name = mod.META.name;
    const pop = await step('popular', async () => { const r = await eng.popular(1); if (!r.items.length) throw new Error('0 items'); return { n: r.items.length, first: r.items[0], hasNext: r.hasNext }; });
    await step('search', async () => { const q = pop ? pop.first.name.split(/\s+/).slice(0, 2).join(' ') : 'a'; const r = await eng.search(q, 1); if (!r.items.length) throw new Error('0 items for ' + q); return { n: r.items.length, q }; });
    if (pop) {
      const link = pop.first.link;
      await step('detail', async () => { const d = await eng.detail(link); if (!d.name) throw new Error('no name'); return { name: d.name, author: d.author, genres: d.genres.length, cover: !!d.cover, desc: d.description.length }; });
      const ch = await step('chapters', async () => { const c = await eng.chapters(link); if (!c.length) throw new Error('0 chapters'); return { n: c.length, first: c[0] }; });
      if (ch) {
        const u = ch.first.url;
        if (res.type === 'novel') await step('content', async () => { const c = await eng.content(u); const len = c.html.replace(/<[^>]+>/g, '').trim().length; if (len < 50) throw new Error('content too short: ' + len); return { len }; });
        if (res.type === 'comic') await step('pages', async () => { const p = await eng.pages(u); if (!p.length) throw new Error('0 pages'); return { n: p.length, first: p[0] }; });
        if (res.type === 'video') await step('videos', async () => { const v = await eng.videos(u); if (!v.length) throw new Error('0 streams'); return { n: v.length, first: v[0].url }; });
      }
    }
  } catch (e) { res.error = String(e.message || e); }
  res.ms = Date.now() - t0;
  const need = ['popular', 'detail', 'chapters', res.type === 'novel' ? 'content' : res.type === 'comic' ? 'pages' : 'videos'];
  res.pass = need.every(n => res.steps[n] && res.steps[n].ok);
  console.log((res.pass ? 'PASS ' : 'FAIL ') + id + ' ' + Object.entries(res.steps).map(([k, v]) => k + (v.ok ? '✓' : '✗')).join(' ') + ' ' + res.ms + 'ms');
  return res;
}
const out = []; let i = 0;
await Promise.all(Array.from({ length: CONC }, async () => { while (i < ids.length) out.push(await testOne(ids[i++])); }));
out.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(path.join(ROOT, 'test-results.json'), JSON.stringify({ date: new Date().toISOString(), total: out.length, pass: out.filter(r => r.pass).length, results: out }, null, 1));
console.log(`PASS ${out.filter(r => r.pass).length}/${out.length}`);
process.exit(0); // background requests of timed-out steps must not keep the process alive
