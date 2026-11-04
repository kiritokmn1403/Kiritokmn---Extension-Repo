// Offline parser test against page snapshots (no network): popular(1) on home.html, detail/chapters on detail.html.
// Usage: node tools/test/offline.mjs <snapDir> [id ...]
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [snap, ...only] = process.argv.slice(2);
const home = JSON.parse(fs.readFileSync(path.join(snap, '_summary_home.json'), 'utf8'));
let det = {}; try { det = JSON.parse(fs.readFileSync(path.join(snap, '_summary_jobs_detail.json'), 'utf8')); } catch { }
const { VBookEngine } = await import(pathToFileURL(path.join(ROOT, '.build/_offline_runtime.mjs')).href);
const norm = u => String(u || '').replace(/^https?:\/\/(www\.|m\.)?/, '').replace(/[?#].*$/, '').replace(/\/+$/, '').toLowerCase();
const ids = only.length ? only : fs.readdirSync(path.join(ROOT, '.build')).filter(f => f.endsWith('.scripts.js')).map(f => f.slice(0, -11));
const out = {};
for (const id of ids) {
  const h = home[id + ':home']; const d = det[id + ':detail'];
  const pages = {};
  if (h && h.status === 200) { const f = ['home.html', 'home.json'].map(x => path.join(snap, id, x)).find(fs.existsSync); if (f) { pages[norm(h.final)] = f; pages[norm(h.req)] = f; } }
  if (d && d.status === 200) { const f = ['detail.html', 'detail.json'].map(x => path.join(snap, id, x)).find(fs.existsSync); if (f) { pages[norm(d.final)] = f; pages[norm(d.req)] = f; } }
  if (!Object.keys(pages).length) continue;
  const misses = [];
  const host = { name: 'Offline', config: () => null, storageGet: () => null, storageSet: () => {}, log: () => {},
    request: async r => { const f = pages[norm(r.url)]; if (!f) { misses.push(r.url); return { status: 404, url: r.url, headers: {}, text: '' }; } return { status: 200, url: r.url, headers: {}, text: fs.readFileSync(f, 'utf8') }; } };
  let mod; try { mod = await import(pathToFileURL(path.join(ROOT, '.build', 'test', id + '.mjs')).href + '?t=' + Date.now()); } catch (e) { out[id] = { err: 'import ' + e.message }; continue; }
  const eng = new VBookEngine({ meta: mod.META, scripts: mod.SCRIPTS, host });
  const r = { type: mod.META.type };
  try { const p = await eng.popular(1); r.popular = p.items.length; r.first = p.items[0]; } catch (e) { r.popularErr = String(e.message).slice(0, 120); }
  if (d && d.status === 200) {
    try { const x = await eng.detail(d.req); r.detail = { name: x.name, cover: !!x.cover, desc: x.description.length, genres: x.genres.length }; } catch (e) { r.detailErr = String(e.message).slice(0, 120); }
    try { const c = await eng.chapters(d.req); r.chapters = c.length; r.ch0 = c[0]; } catch (e) { r.chErr = String(e.message).slice(0, 120); }
  }
  r.misses = misses.slice(0, 3);
  out[id] = r;
  console.log(id, JSON.stringify(r).slice(0, 400));
}
fs.writeFileSync(path.join(ROOT, '.build/offline-results.json'), JSON.stringify(out, null, 1));
