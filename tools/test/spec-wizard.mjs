// Spec wizard (Node): for each source, fetch pages the way a plugin does and propose generic-template selectors.
// Uses the project's own HTML engine (runtime/dom.js), so every proposed selector is one the plugins can run.
// Usage: node tools/test/spec-wizard.mjs <ids.json> <out.json>   (ids.json: [{id,type,base}])
import fs from 'node:fs';
import { parseHtml } from '../../runtime/dom.js';

const UA = 'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36';
async function get(u, ref) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 20000);
  try {
    const r = await fetch(u, { headers: { 'User-Agent': UA, 'Accept-Language': 'vi,zh;q=0.9,en;q=0.8', ...(ref ? { Referer: ref } : {}) }, redirect: 'follow', signal: ctl.signal });
    const buf = Buffer.from(await r.arrayBuffer());
    let h = buf.toString('utf8');
    const cs = (/charset=["']?([\w-]+)/i.exec(r.headers.get('content-type') || '') || /<meta[^>]+charset=["']?([\w-]+)/i.exec(h.slice(0, 3000)) || [])[1];
    if (cs && /gb|big5/i.test(cs)) { try { h = new TextDecoder(cs.toLowerCase().replace('gb2312', 'gbk')).decode(buf); } catch { } }
    return { s: r.status, u: r.url, h };
  } finally { clearTimeout(t); }
}
const abs = (h, b) => { try { return new URL(h, b).href; } catch { return ''; } };
const hostOf = u => { try { return new URL(u).host.replace(/^(www|m)\./, ''); } catch { return ''; } };
const BAD_CLS = /^(active|current|show|hidden|on|clearfix|cf|fl|fr|left|right|first|last|odd|even|swiper-slide-\w+|col|row|d-[\w-]+|[pm][xytblr]?-\d+|w-\d+|h-\d+|flex|grid|relative|absolute|block|inline|items-\w+|gap-\d+)$/i;
const cls = el => String((el.attr('class') || '')).split(/\s+/).filter(c => c && !BAD_CLS.test(c) && !/[:\[\]\/@!.%#]/.test(c) && !/^\d/.test(c) && c.length < 40);
const sel = el => { const c = cls(el); const id = el.attr('id'); if (id && /^[a-z][\w-]{1,30}$/i.test(id) && !/\d{3,}/.test(id)) return '#' + id; return el.tagName() + (c.length ? '.' + c.slice(0, 2).join('.') : ''); };
const pickSel = (root, list) => { for (const s of list) { const [css, at] = s.split('@'); let e; try { e = css === ':self' ? root : root.selectFirst(css); } catch { continue; } if (!e) continue; const v = at ? e.attr(at) : e.text(); if (v && String(v).trim().length > 1) return s; } return ''; };
const val = (root, s) => { if (!s) return ''; const [css, at] = s.split('@'); const e = css === ':self' ? root : root.selectFirst(css); return e ? String(at ? e.attr(at) || '' : e.text()).trim() : ''; };
const CHAP_RE = /chuong|chapter|chap|ch-|tap-|episode|\/\d+(\.html?)?$|_\d+\.html|\/(read|doc)\//i;


// Rank repeated "card" blocks (an element per story/video with a link to its page) on a list or search page.
export function cardGroups(doc, pageUrl, type, minN = 4) {
  const H = hostOf(pageUrl); const internal = u => { try { return hostOf(u) === H && !/\.(jpe?g|png|webp|gif|css|js|ico)(\?|$)/i.test(u) && new URL(u).pathname.length > 1; } catch { return false; } };
  const groups = new Map();
  const NAVISH = /(^|[-_\s])(nav|menu|dropdown|header|footer|breadcrumb|pagination|pager|tabs?|social|sidebar-menu|top-?bar|tag-?cloud|genres?|categor)/i;
  const LISTISH = /\/(the-loai|category|categories|genre|genres|tag|tags|tac-gia|author|danh-sach|sort|page|search|tim-kiem|login|register|dang-nhap|lien-he|contact)\b/i;
  for (const el of doc.select('body *')) {
    const tag = el.tagName(); if (!cls(el).length && !['li', 'article', 'dl', 'tr'].includes(tag)) continue;
    if (el.parents().some(x => ['nav', 'header', 'footer'].includes(x.tagName()) || NAVISH.test((x.attr('class') || '') + ' ' + (x.attr('id') || '')))) continue;
    if (NAVISH.test(el.attr('class') || '')) continue;
    const anchors = tag === 'a' ? [el] : el.select('a[href]');
    const ok = x => { const u = abs(x.attr('href'), pageUrl); if (!u || !internal(u)) return false; const p = new URL(u).pathname; return !LISTISH.test(p) && !CHAP_RE.test(p.replace(/\/$/, '')); };
    const a = anchors.find(ok); if (!a) continue;
    const p = el.parent(); let ps = p ? sel(p) : '';
    if (p && !/[.#]/.test(ps) && p.parent()) ps = sel(p.parent()) + ' > ' + ps;
    const k = (ps ? ps + ' > ' : '') + sel(el);
    const g = groups.get(k) || { k, n: 0, img: 0, len: 0, els: [], links: new Set() }; g.n++; if (el.selectFirst('img')) g.img++; g.len += el.text().length; g.els.push(el); g.links.add(abs(a.attr('href'), pageUrl)); groups.set(k, g);
  }
  const wantImg = type !== 'novel';
  return [...groups.values()].filter(g => g.n >= 1 && g.n <= 400 && g.len / g.n < 1500 && g.len / g.n > 2 && g.links.size >= Math.min(g.n, 4) * 0.75)
    .map(g => {
      const e0 = g.els[0];
      const title = pickSel(e0, ['h3 a', 'h3', 'h2 a', 'h2', 'h4 a', 'h4', '.title a', '.title', '[class*=title] a', '[class*=title]', '[class*=name] a', '[class*=name]', 'a@title', 'img@alt', 'a', ':self@title', ':self']);
      const link = e0.tagName() === 'a' ? ':self@href' : pickSel(e0, ['h3 a@href', 'h2 a@href', '.title a@href', '[class*=title] a@href', '[class*=name] a@href', 'a@href']);
      return { ...g, title, link, cover: e0.selectFirst('img') ? 'img@img' : '', titles: g.els.map(e => val(e, title)), score: Math.min(g.links.size, 60) * (g.img / g.n > 0.6 ? (wantImg ? 3 : 1.5) : 1) / (1 + g.len / g.n / 400) };
    })
    .filter(g => g.n >= minN).sort((a, b) => b.score - a.score);
}

export async function wizard(src) {
  const out = { id: src.id, type: src.type, base: src.base };
  const home = await get(src.base); out.homeStatus = home.s; out.final = home.u;
  const H = hostOf(home.u); const internal = u => hostOf(u) === H && !/\.(jpe?g|png|webp|gif|css|js|ico)(\?|$)/i.test(u) && new URL(u).pathname.length > 1;
  const doc = parseHtml(home.h, home.u);
  // search form
  for (const f of doc.select('form')) {
    const inp = f.select('input[name]').filter(i => !/hidden|submit|checkbox|radio/i.test(i.attr('type') || '')); if (!inp.length) continue;
    const name = inp[0].attr('name'); const act = abs(f.attr('action') || home.u, home.u);
    if (!/search|tim|key|q|kw|word|s$|query/i.test(name + act)) continue;
    const hidden = f.select('input[type=hidden][name]').map(i => i.attr('name') + '=' + encodeURIComponent(i.attr('value') || '')).join('&');
    const method = (f.attr('method') || 'get').toLowerCase();
    if (method === 'get') { const p = new URL(act); out.search = p.pathname + '?' + (hidden ? hidden + '&' : '') + name + '={q}'; } else out.searchPost = { action: act, field: name, hidden };
    break;
  }
  // cards
  const cand = cardGroups(doc, home.u, src.type);
  out.cands = cand.slice(0, 4).map(g => [g.k, g.n, g.img]);
  const best = cand[0]; if (!best) return out;
  const { title, link } = best; const e0 = best.els[0];
  const G = { item: best.k, link, title, cover: best.cover };
  out.items = best.els.slice(0, 3).map(e => [val(e, title).slice(0, 40), abs(val(e, link), home.u)]);
  out.n = best.n;
  // detail + chapters
  const det = await get(out.items[0][1], home.u); out.detailStatus = det.s;
  const dd = parseHtml(det.h, det.u); const dpath = new URL(det.u).pathname.replace(/\.html?$/, '').replace(/\/$/, '');
  G.d_title = dd.selectFirst('h1') && dd.selectFirst('h1').text().trim() ? 'h1 || meta[property=og:title]@content' : 'meta[property=og:title]@content || title';
  G.d_cover = 'meta[property=og:image]@content || img@img'; G.d_desc = 'meta[property=og:description]@content || meta[name=description]@content';
  const chG = new Map();
  for (const a of dd.select('a[href]')) {
    const u = abs(a.attr('href'), det.u); if (!u || !internal(u) || u === det.u) continue;
    const p = new URL(u).pathname; if (!(CHAP_RE.test(p) || p.startsWith(dpath + '/'))) continue;
    const par = a.parents().find(x => ['ul', 'ol', 'dl', 'div', 'section', 'tbody', 'table'].includes(x.tagName()) && cls(x).length + (x.attr('id') ? 1 : 0) > 0); if (!par) continue;
    const k = sel(par) + ' a'; const g = chG.get(k) || { k, n: 0, sample: [] }; g.n++; if (g.sample.length < 3) g.sample.push([a.text().trim().slice(0, 30), u]); chG.set(k, g);
  }
  const chs = [...chG.values()].sort((a, b) => b.n - a.n); out.chCands = chs.slice(0, 3).map(g => [g.k, g.n, g.sample[0]]);
  if (chs[0] && chs[0].n >= 1) { G.ch_list = chs[0].k; out.nch = chs[0].n; }
  // chapter
  const chUrl = chs[0] && chs[0].sample[chs[0].sample.length > 1 ? 1 : 0][1];
  if (chUrl && src.type !== 'video') {
    const ch = await get(chUrl, det.u); out.chapStatus = ch.s; const cd = parseHtml(ch.h, ch.u);
    if (src.type === 'comic') {
      const ig = new Map(); for (const i of cd.select('img')) { const p = i.parents().find(x => cls(x).length || x.attr('id')); if (!p) continue; const k = sel(p) + ' img'; ig.set(k, (ig.get(k) || 0) + 1); }
      const b2 = [...ig.entries()].sort((a, b) => b[1] - a[1]); if (b2[0]) { G.pages = b2[0][0]; out.npages = b2[0][1]; }
    } else {
      let bestEl = null, bestLen = 0;
      for (const e of cd.select('div,article,section,main,td')) { let t = 0; for (const n of e.node.children || []) { if (n.type === 'text') t += n.data.trim().length; else if (/^(p|br|span|font)$/i.test(n.name || '')) t += (n.children || []).reduce((s, c) => s + (c.data ? c.data.trim().length : 0), 0); } if (t > bestLen) { bestLen = t; bestEl = e; } }
      if (bestEl) { G.content = sel(bestEl); out.contentLen = bestLen; out.contentHead = bestEl.text().trim().slice(0, 50); }
    }
  }
  out.G = G; return out;
}

if (process.argv[1] && process.argv[1].endsWith('spec-wizard.mjs')) {
const [, , inF, outF] = process.argv;
const list = JSON.parse(fs.readFileSync(inF, 'utf8')); const res = [];
const q = [...list]; await Promise.all(Array.from({ length: 6 }, async () => { while (q.length) { const s = q.shift(); try { res.push(await wizard(s)); } catch (e) { res.push({ id: s.id, error: String(e && e.message || e).slice(0, 120) }); } } }));
fs.writeFileSync(outF, JSON.stringify(res, null, 1)); console.log('wizard done', res.length);
}
