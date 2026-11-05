// Find a working search URL for generic sources whose search step fails.
// For each source: take a word from a list-page title, try common search URL patterns (and the site's own form),
// keep the first pattern whose result page yields cards (G.item) containing the query; then rebuild + live-test and
// keep the change only if the search step passes.   Usage: node tools/test/search-improve.mjs <out.json>
import fs from 'node:fs'; import path from 'node:path'; import { execFileSync } from 'node:child_process'; import { fileURLToPath } from 'node:url';
import { parseHtml } from '../../runtime/dom.js';
import { cardGroups } from './spec-wizard.mjs';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const [, , outF] = process.argv;
const UA = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';
const resFile = fs.existsSync(path.join(ROOT, 'test-results.json')) ? path.join(ROOT, 'test-results.json') : path.join(ROOT, 'data/test-results.json');
const merged = Object.fromEntries((JSON.parse(fs.readFileSync(path.join(ROOT, 'data/test-results.json'), 'utf8')).results || []).map(r => [r.id, r]));
for (const r of (JSON.parse(fs.readFileSync(resFile, 'utf8')).results || [])) merged[r.id] = r;
const cfgPath = id => path.join(ROOT, 'sources', id, 'src', 'config.js');
function splitCfg(txt) { const i = txt.indexOf('var G = '); if (i < 0) return null; try { return { head: txt.slice(0, i), G: JSON.parse(txt.slice(i + 8).trim().replace(/;\s*$/, '')) }; } catch { return null; } }
async function get(u, opt = {}) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 15000);
  try { const r = await fetch(u, { method: opt.method || 'GET', body: opt.body, headers: { 'User-Agent': UA, 'Content-Type': opt.body ? 'application/x-www-form-urlencoded' : undefined, Referer: u }, redirect: 'follow', signal: ctl.signal }); return { s: r.status, u: r.url, h: await r.text() }; } finally { clearTimeout(t); }
}
const PATTERNS = ['/tim-kiem?keyword={q}', '/tim-kiem?q={q}', '/tim-kiem?tu-khoa={q}', '/tim-kiem/?tukhoa={q}', '/tim-kiem?key={q}', '/tim-kiem/{q}', '/tim-truyen?keyword={q}', '/search?q={q}', '/search?keyword={q}', '/search?s={q}', '/search?k={q}', '/search?query={q}', '/search?key={q}', '/search/{q}', '/search/?keyword={q}', '/?s={q}', '/?q={q}', '/danh-sach?keyword={q}', '/truyen?keyword={q}', '/search.php?q={q}', '/search.php?keyword={q}', '/search.php?searchkey={q}', '/search.php?key={q}', '/modules/article/search.php?searchkey={q}', '/s.php?q={q}', '/s?q={q}', '/so/{q}', '/search.html?searchkey={q}', '/searchbook.php?keyword={q}', '/index.php?s=/search&key={q}'];
function itemsOf(G, html, base) {
  const doc = parseHtml(html, base); const out = [];
  for (const e of doc.select(G.item)) { const [css, at] = (G.title || 'a').split('@'); const t = css === ':self' ? e : e.selectFirst(css); const v = t ? String(at ? t.attr(at) || '' : t.text()).trim() : ''; if (v) out.push(v); }
  return out;
}
const ids = Object.values(merged).filter(r => r.steps && r.steps.popular && r.steps.popular.ok && !(r.steps.search && r.steps.search.ok)).map(r => r.id)
  .filter(id => fs.existsSync(cfgPath(id)) && splitCfg(fs.readFileSync(cfgPath(id), 'utf8')));
console.log('candidates', ids.length);
const results = []; const orig = {};
const q = [...ids];
await Promise.all(Array.from({ length: 6 }, async () => {
  while (q.length) {
    const id = q.shift(); const rec = { id };
    try {
      const txt = fs.readFileSync(cfgPath(id), 'utf8'); const c = splitCfg(txt); const G = c.G;
      const base = (/var BASE_URL = "([^"]+)"/.exec(c.head) || [])[1];
      const first = merged[id].steps.popular.first || {}; const name = String(first.name || '');
      const word = (name.match(/[一-鿿]{2,4}/) || [])[0] || name.replace(/^\[[^\]]*\]\s*/, '').split(/[\s:：,，.!?]+/).filter(w => w.length > 1).slice(0, 2).join(' ');
      rec.q = word; if (!word || !G.item) { rec.skip = 'no query'; results.push(rec); continue; }
      const enc = encodeURIComponent(word); let found = null;
      const tok = word.toLowerCase().split(' ')[0];
      // Look for a block of cards on the result page whose titles contain the query; a nonsense query must not return them.
      const probe = async (url, opt) => {
        const r = await get(url, opt); if (r.s !== 200) return null;
        const doc = parseHtml(r.h, r.u);
        const gs = cardGroups(doc, r.u, merged[id].type, 1).map(g => ({ g, hit: g.titles.filter(t => String(t).toLowerCase().includes(tok)).length })).filter(x => x.hit >= 1 && x.hit >= x.g.n * 0.3).sort((a, b) => b.hit - a.hit);
        return gs[0] || null;
      };
      let homeTitles = []; try { const h = await get(base + '/'); homeTitles = cardGroups(parseHtml(h.h, h.u), h.u, merged[id].type).flatMap(g => g.titles); } catch { }
      const own = [];
      try { const h = await get(base + '/'); for (const f of parseHtml(h.h, h.u).select('form')) { if ((f.attr('method') || 'get').toLowerCase() !== 'get') continue; const inp = f.select('input[name]').find(i => !/hidden|submit|checkbox|radio/i.test(i.attr('type') || '')); if (!inp) continue; const act = new URL(f.attr('action') || h.u, h.u); if (act.host !== new URL(base).host) continue; const hidden = f.select('input[type=hidden][name]').map(i => i.attr('name') + '=' + encodeURIComponent(i.attr('value') || '')).join('&'); own.push(act.pathname + '?' + (hidden ? hidden + '&' : '') + inp.attr('name') + '={q}'); } } catch { }
      for (const pat of [...own, ...PATTERNS]) {
        try {
          const best = await probe(base + pat.replace('{q}', enc)); if (!best) continue;
          const ts = best.g.titles; const same = ts.filter(t => homeTitles.includes(t)).length; if (ts.length > 3 && same / ts.length > 0.8) continue;
          const z = await probe(base + pat.replace('{q}', 'zqxjkvwq')); if (z) continue;
          found = { pat, n: best.g.n, hit: best.hit, sel: { s_item: best.g.k, s_title: best.g.title, s_link: best.g.link, s_cover: best.g.cover } }; break;
        } catch { }
      }
      // POST form fallback (biquge-style)
      if (!found) {
        const home = await get(base + '/'); const doc = parseHtml(home.h, home.u);
        for (const f of doc.select('form')) {
          if ((f.attr('method') || '').toLowerCase() !== 'post') continue; const inp = f.select('input[name]').find(i => !/hidden|submit/i.test(i.attr('type') || '')); if (!inp) continue;
          const act = new URL(f.attr('action') || home.u, home.u); const hidden = f.select('input[type=hidden][name]').map(i => i.attr('name') + '=' + encodeURIComponent(i.attr('value') || '')).join('&');
          const body = (hidden ? hidden + '&' : '') + inp.attr('name') + '={q}';
          try { const best = await probe(act.href, { method: 'POST', body: body.replace('{q}', enc) }); if (!best) continue; const z = await probe(act.href, { method: 'POST', body: body.replace('{q}', 'zqxjkvwq') }); if (z) continue; found = { post: { url: act.pathname + act.search, body }, n: best.g.n, sel: { s_item: best.g.k, s_title: best.g.title, s_link: best.g.link, s_cover: best.g.cover } }; break; } catch { }
        }
      }
      rec.found = found;
      if (found) {
        orig[id] = txt; const patch = found.post ? { search_post: found.post } : { search: found.pat }; if (found.sel && found.sel.s_item !== G.item) Object.assign(patch, found.sel); rec.patch = patch;
        fs.writeFileSync(cfgPath(id), c.head + 'var G = ' + JSON.stringify({ ...G, ...patch }, null, 1) + ';\n');
      }
    } catch (e) { rec.error = String(e && e.message || e).slice(0, 120); }
    results.push(rec);
  }
}));
const changed = Object.keys(orig); console.log('patched', changed.length);
if (changed.length) {
  execFileSync(process.execPath, [path.join(ROOT, 'tools/build/build-all.mjs'), '--only', changed.join(',')], { cwd: ROOT, stdio: 'inherit' });
  try { execFileSync(process.execPath, [path.join(ROOT, 'tools/test/run-tests.mjs'), '--only', changed.join(','), '--conc', '6'], { cwd: ROOT, stdio: 'inherit', timeout: 1500000 }); } catch (e) { console.log('tests:', e.message); }
  const now = Object.fromEntries((JSON.parse(fs.readFileSync(path.join(ROOT, 'test-results.json'), 'utf8')).results || []).map(r => [r.id, r]));
  for (const r of results) { if (!orig[r.id]) continue; const n = now[r.id]; r.searchOk = !!(n && n.steps.search && n.steps.search.ok); r.pass = !!(n && n.pass); r.kept = r.searchOk; if (!r.kept) fs.writeFileSync(cfgPath(r.id), orig[r.id]); }
}
fs.writeFileSync(outF, JSON.stringify(results, null, 1));
console.log('search fixed', results.filter(r => r.kept).length, 'of', results.length);
process.exit(0);
