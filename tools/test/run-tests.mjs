import { fileURLToPath } from 'node:url';
// Live end-to-end test of every built source (Node host = same engine as Mangayomi/LNReader builds).
// popular -> detail -> chapters -> first chapter content/pages/videos. Writes test-results.json.
// Usage: node tools/test/run-tests.mjs [--only a,b] [--conc 4] [--out file] [--record dir | --replay dir]
//   0.0.4: --record saves every HTTP response (one JSON per request) so selectors can be developed offline with --replay.
import fs from 'node:fs'; import path from 'node:path'; import { pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2); const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const only = opt('--only') ? new Set(opt('--only').split(',')) : null;
const CONC = +(opt('--conc') || 4);
const OUTF = opt('--out') ? path.resolve(opt('--out')) : path.join(ROOT, 'test-results.json'); // 0.0.3: separate result files (e.g. runs through a VPN)
const dir = path.join(ROOT, '.build');
// ---- 0.0.4: record / replay of HTTP traffic (wraps the global fetch used by the Node host)
const REC = opt('--record'), REP = opt('--replay'); const misses = [];
if (REC || REP) {
  const { createHash } = await import('node:crypto');
  const realFetch = globalThis.fetch; const D = path.resolve(REC || REP); fs.mkdirSync(D, { recursive: true });
  const key = (u, o) => createHash('sha1').update(((o && o.method) || 'GET') + ' ' + u + ' ' + ((o && typeof o.body === 'string') ? o.body : '')).digest('hex').slice(0, 24);
  const mk = (buf, d) => { const r = new Response(d.status === 204 || d.status === 304 ? null : buf, { status: d.status < 200 ? 200 : d.status, headers: d.headers }); Object.defineProperty(r, 'url', { value: d.final || d.url }); return r; };
  globalThis.fetch = async (u, o = {}) => {
    const f = path.join(D, key(String(u), o) + '.json');
    if (REP) { if (fs.existsSync(f)) { const d = JSON.parse(fs.readFileSync(f, 'utf8')); return mk(Buffer.from(d.b64, 'base64'), d); } misses.push(String(u)); throw new Error('replay miss ' + u); }
    const res = await realFetch(u, o); const buf = Buffer.from(await res.arrayBuffer()); const headers = {}; res.headers.forEach((v, k) => { if (k !== 'content-encoding' && k !== 'content-length') headers[k] = v; });
    const d = { url: String(u), final: res.url, status: res.status, headers, b64: buf.toString('base64') };
    try { fs.writeFileSync(f, JSON.stringify(d)); } catch { }
    return mk(buf, d);
  };
}
// ---- 0.0.4: list entries that are really site menu / category links ("Manhwa", "Thể loại", /the-loai/...) must not count as a pass
const MENU_NAME = /^(trang chủ|home|thể loại|the loai|danh sách( truyện)?|manhwa|manhua|manga|comic|novel|truyện (mới|hot|full|tranh|chữ)|top|bxh|bảng xếp hạng|đăng nhập|đăng ký|login|register|tìm kiếm|search|liên hệ|giới thiệu|lịch sử|theo dõi|xem thêm|more|categories|genres?|lịch sử( đọc)?|truyện đã lưu|tìm kiếm nâng cao|album( cộng đồng)?|thư viện|bookmark|history|library|首页|分类|排行榜|书架|登录|注册)$/i;
const MENU_LINK = /\/(the-loai|theloai|category|categories|genre|genres|tag|tags|danh-sach|tim-kiem|search|tac-gia|author|login|dang-nhap|register|lien-he|contact|lib|library|albums?|history|lich-su|follows?|theo-doi|bookmarks?)(\/|\?|\.html|$)/i;
const menuLike = items => { const bad = items.filter(x => MENU_NAME.test(String(x.name || '').trim()) || MENU_LINK.test(String(x.link || ''))).length; return items.length ? bad / items.length : 0; };
const { makeEngineFor } = await import(pathToFileURL(path.join(dir, '_runtime.mjs')).href);
const ids = fs.readdirSync(dir).filter(f => f.endsWith('.scripts.js')).map(f => f.slice(0, -11)).filter(i => !i.startsWith('_') && (!only || only.has(i)));
const timeout = (p, ms, what) => Promise.race([p, new Promise((_, r) => setTimeout(() => r(new Error('timeout ' + what)), ms))]);
async function testOne(id) {
  const t0 = Date.now(); const res = { id, steps: {} };
  const step = async (name, fn) => { const s = Date.now(); try { const v = await timeout(fn(), 60000, name); res.steps[name] = { ok: true, ms: Date.now() - s, ...v }; return v; } catch (e) { res.steps[name] = { ok: false, ms: Date.now() - s, error: String(e.message || e).slice(0, 200) }; return null; } };
  try {
    const mod = await import(pathToFileURL(path.join(dir, 'test', id + '.mjs')).href);
    const eng = makeEngineFor(mod.META, mod.SCRIPTS, { log: () => {} }); res.type = mod.META.type; res.name = mod.META.name;
    const pop = await step('popular', async () => { const r = await eng.popular(1); if (!r.items.length) throw new Error('0 items'); const ml = menuLike(r.items); if (ml >= 0.5) throw new Error('items look like site menu/category links (' + Math.round(ml * 100) + '%): ' + r.items.slice(0, 3).map(x => x.name).join(' | ')); return { n: r.items.length, first: r.items[0], hasNext: r.hasNext }; });
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
// --only runs update their entries in the existing results instead of replacing the whole file
let all = out;
if (only) { try { const prev = JSON.parse(fs.readFileSync(OUTF, 'utf8')).results || []; const mine = new Set(out.map(r => r.id)); all = prev.filter(r => !mine.has(r.id)).concat(out); } catch { } }
all.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(OUTF, JSON.stringify({ date: new Date().toISOString(), total: all.length, pass: all.filter(r => r.pass).length, results: all }, null, 1));
console.log(`PASS ${out.filter(r => r.pass).length}/${out.length}`);
if (REP && misses.length) { fs.writeFileSync(path.join(path.resolve(REP), '_misses.json'), JSON.stringify([...new Set(misses)], null, 1)); console.log('replay misses: ' + new Set(misses).size); }
process.exit(0); // background requests of timed-out steps must not keep the process alive
