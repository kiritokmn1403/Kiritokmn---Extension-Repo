// Spec wizard: run in a browser tab on the site's origin (javascript_tool). It fetches pages the way the
// plugin does (raw HTML, no JS) and proposes generic-template selectors: item/link/title/cover, ch_list,
// content (novel) or pages (comic). Usage: await __wiz({ type: 'novel'|'comic', home: '/', detail: optionalUrl })
window.__wiz = async function (o) {
  o = o || {};
  const P = h => new DOMParser().parseFromString(h, 'text/html');
  const get = async u => { const r = await fetch(u, { credentials: 'include' }); return { s: r.status, u: r.url, h: await r.text() }; };
  const abs = (h, b) => { try { return new URL(h, b).href; } catch (e) { return ''; } };
  const host = location.host.replace(/^www\.|^m\./, '');
  const internal = u => { try { const x = new URL(u); return x.host.replace(/^www\.|^m\./, '') === host && !/\.(jpg|jpeg|png|webp|gif|css|js)(\?|$)/i.test(x.pathname) && x.pathname.length > 1; } catch (e) { return false; } };
  const cls = el => [...el.classList].filter(c => !/^(active|current|show|hidden|swiper-slide-\w+|col|row|d-\w+|clearfix)$/i.test(c) && !/[:\[\]\/@!.]/.test(c) && !/^\d/.test(c));
  const sel = el => { const c = cls(el); return el.tagName.toLowerCase() + (c.length ? '.' + c.slice(0, 2).map(CSS.escape).join('.') : ''); };
  const out = { origin: location.origin };
  // ---- 1. cards on the list page
  const home = await get(o.home || '/'); out.homeStatus = home.s; const d = P(home.h);
  const groups = new Map();
  d.querySelectorAll('body *').forEach(el => {
    if (!el.classList.length && !['LI', 'ARTICLE'].includes(el.tagName)) return;
    const a = [...el.querySelectorAll('a[href]')].find(x => internal(abs(x.getAttribute('href'), home.u)));
    if (!a) return;
    const s = sel(el); const parentSel = el.parentElement ? sel(el.parentElement) : '';
    const k = parentSel + ' > ' + s; const g = groups.get(k) || { k, s, n: 0, img: 0, len: 0, els: [] };
    g.n++; if (el.querySelector('img')) g.img++; g.len += el.outerHTML.length; g.els.push(el); groups.set(k, g);
  });
  const cand = [...groups.values()].filter(g => g.n >= 4 && g.n <= 300 && g.len / g.n < 6000)
    .map(g => ({ ...g, score: g.n * (o.type === 'novel' ? 1 : (g.img / g.n > 0.6 ? 2 : 0.5)) * (g.img / g.n > 0.6 ? 1.5 : 1) - (g.len / g.n) / 400 }))
    .sort((a, b) => b.score - a.score);
  out.cands = cand.slice(0, 5).map(g => [g.k, g.n, g.img, Math.round(g.len / g.n)]);
  const best = cand[0];
  if (!best) return out;
  const pick = (root, list) => { for (const s of list) { const [css, at] = s.split('@'); const e = css === ':self' ? root : root.querySelector(css); if (!e) continue; const v = at ? e.getAttribute(at) : e.textContent.trim(); if (v && v.trim().length > 1) return s; } return ''; };
  const e0 = best.els[0];
  const titleSel = pick(e0, ['h3 a', 'h3', 'h2 a', 'h2', 'h4', '.title', '[class*=title]', '[class*=name]', 'a@title', 'img@alt', 'a']);
  const linkSel = e0.tagName === 'A' ? ':self@href' : pick(e0, ['h3 a@href', 'h2 a@href', '[class*=title] a@href', 'a@href']);
  out.G = { item: best.k.replace(/^ > /, ''), link: linkSel, title: titleSel, cover: e0.querySelector('img') ? 'img@img' : '' };
  const val = (root, s) => { const [css, at] = s.split('@'); const e = css === ':self' ? root : root.querySelector(css); return e ? (at ? e.getAttribute(at) : e.textContent.trim()) : ''; };
  out.items = best.els.slice(0, 3).map(e => [val(e, titleSel).slice(0, 40), abs(val(e, linkSel), home.u)]);
  // ---- 2. chapters on the detail page
  const detailUrl = o.detail || out.items[0][1];
  const det = await get(detailUrl); out.detailStatus = det.s; const dd = P(det.h);
  out.d_title = (dd.querySelector('h1') || {}).textContent ? 'h1' : 'meta[property=og:title]@content';
  const chGroups = new Map(); const dpath = new URL(det.u).pathname.replace(/\.html?$/, '').replace(/\/$/, '');
  dd.querySelectorAll('a[href]').forEach(a => {
    const u = abs(a.getAttribute('href'), det.u); if (!internal(u) || u === det.u) return;
    const p = new URL(u).pathname; const chapLike = /chuong|chapter|chap|ch-|tap-|episode|\/\d+(\.html?)?$|_\d+/.test(p) || p.startsWith(dpath + '/');
    if (!chapLike) return;
    const par = a.closest('ul,ol,dl,div,section,tbody'); if (!par) return;
    const k = sel(par) + ' a'; const g = chGroups.get(k) || { k, n: 0, sample: [] }; g.n++; if (g.sample.length < 2) g.sample.push([a.textContent.trim().slice(0, 30), u]); chGroups.set(k, g);
  });
  const chs = [...chGroups.values()].sort((a, b) => b.n - a.n); out.chCands = chs.slice(0, 4).map(g => [g.k, g.n, g.sample[0]]);
  if (chs[0]) out.G.ch_list = chs[0].k;
  const next = [...dd.querySelectorAll('a[href]')].find(a => /^(next|»|›|下一页|trang sau|sau|tiếp)/i.test(a.textContent.trim()) && /page|trang|_\d|\/\d/.test(a.getAttribute('href')));
  if (next) out.ch_next_hint = sel(next.parentElement) + ' a';
  // ---- 3. chapter content / pages
  const chUrl = chs[0] && chs[0].sample[0] && chs[0].sample[0][1];
  if (chUrl) {
    const ch = await get(chUrl); out.chapStatus = ch.s; const cd = P(ch.h);
    if (o.type === 'comic') {
      const ig = new Map(); cd.querySelectorAll('img').forEach(i => { const p = i.parentElement.closest('[class],[id]'); if (!p) return; const k = (p.id ? '#' + CSS.escape(p.id) : sel(p)) + ' img'; ig.set(k, (ig.get(k) || 0) + 1); });
      const best2 = [...ig.entries()].sort((a, b) => b[1] - a[1]); out.pageCands = best2.slice(0, 3); if (best2[0]) out.G.pages = best2[0][0];
    } else {
      let bestEl = null, bestLen = 0;
      cd.querySelectorAll('div,article,section,main,td').forEach(e => { const txt = [...e.childNodes].filter(n => n.nodeType === 3 || /^(P|BR|SPAN|FONT)$/.test(n.nodeName)).map(n => n.textContent).join('').trim().length; if (txt > bestLen) { bestLen = txt; bestEl = e; } });
      if (bestEl) { out.G.content = bestEl.id ? '#' + CSS.escape(bestEl.id) : sel(bestEl); out.contentLen = bestLen; out.contentHead = bestEl.textContent.trim().slice(0, 60); }
    }
  }
  return out;
};
'wizard loaded';
