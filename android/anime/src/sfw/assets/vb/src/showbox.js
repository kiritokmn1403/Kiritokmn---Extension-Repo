__register({ META: {"id":"showbox","name":"Showbox","source":"https://pixnet.cc","type":"video","locale":"vi","nsfw":false,"version":1,"config":{"DOMAIN":{"title":"Tên miền","subtitle":"Đổi khi trang đổi tên miền","default":"https://pixnet.cc","values":["https://pixnet.cc"],"mode":"input","format":"text"}},"configDefaults":{"DOMAIN":"https://pixnet.cc"}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute() { var t = []; for (var k in G.tabs) t.push({ title: k, input: k, script: "browse.js" }); return Response.success(t); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(key, page) { return X.search(key, page); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(url) { return X.detail(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(url) { return X.toc(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(url) { return X.servers(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"track": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(data) { return X.track(data); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"browse": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, Console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://pixnet.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]"
};



// Shared helpers for Kiritokmn Extension Repo sources (vBook API, ES5 so it also runs on Rhino).
var C = {
  img: function (el) {
    if (!el) return '';
    var a = ['data-src', 'data-lazy-src', 'data-original', 'data-lazyload', 'data-cfsrc', 'data-url', 'src'];
    for (var i = 0; i < a.length; i++) {
      var v = el.attr(a[i]);
      if (v && v.indexOf('data:image') !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(v)) return C.fix(v.trim());
    }
    var ss = el.attr('data-srcset') || el.attr('srcset');
    if (ss) return C.fix(ss.split(',').pop().trim().split(' ')[0]);
    return '';
  },
  fix: function (u) {
    if (!u) return '';
    u = String(u).trim();
    if (u.indexOf('//') === 0) return 'https:' + u;
    if (u.indexOf('http') === 0) return u;
    if (u.charAt(0) === '/') return BASE_URL + u;
    return BASE_URL + '/' + u;
  },
  text: function (doc, sels) {
    for (var i = 0; i < sels.length; i++) { var t = doc.select(sels[i]).text(); if (t) return t.trim(); }
    return '';
  },
  get: function (url, opt) {
    opt = opt || {};
    var h = { 'Referer': BASE_URL + '/' };
    if (opt.headers) for (var k in opt.headers) h[k] = opt.headers[k];
    var r = fetch(url, { method: opt.method, headers: h, body: opt.body });
    // 429 Too Many Requests: back off and retry (WordPress/Cloudflare rate limits when paging a long TOC)
    for (var tries = 0; r && r.status === 429 && tries < 3 && !C.cf(r); tries++) { sleep(1500 * (tries + 1)); r = fetch(url, { method: opt.method, headers: h, body: opt.body }); }
    return r;
  },
  cf: function (r) {
    if (r.status !== 403 && r.status !== 503 && r.status !== 429) return false;
    var t = r.text() || '';
    return /cf_chl|challenge-platform|Just a moment|Attention Required|cf-turnstile|Verifying you are human/i.test(t.slice(0, 20000));
  },
  check: function (r, url) {
    if (r.ok) return r;
    if (C.cf(r)) throw new Error('CLOUDFLARE: trang ' + url.split('/').slice(0, 3).join('/') + ' yêu cầu xác minh. Mở nguồn bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
    throw new Error('HTTP ' + r.status + ' ' + url);
  },
  html: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.check(C.get(url, opt), url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/\r\n?/g, '\n').replace(/&#13;|&#x0?[dD];/g, '').replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};



// Selector-driven template. A site's config.js defines `var G = {...}` (see docs/SOURCE_SPEC.md).
// Selector syntax: "css" (text), "css@attr" (attribute), "css@html" (inner html), "css@img" (best image url),
// alternatives separated by " || ". URL patterns use {p} (page), {q} (query), {base}.
var X = {
  pick: function (root, spec) {
    if (!spec || !root) return '';
    var alts = String(spec).split(' || ');
    for (var i = 0; i < alts.length; i++) {
      var s = alts[i], at = 'text', k = s.lastIndexOf('@');
      if (k > 0 && !/\[[^\]]*@/.test(s.slice(k))) { at = s.slice(k + 1); s = s.slice(0, k); }
      var els = s === ':self' ? null : root.select(s);
      var el = s === ':self' ? root : (els.size() ? els.first() : null);
      if (!el) continue;
      var v = at === 'text' ? el.text() : at === 'html' ? el.html() : at === 'img' ? C.img(el.is('img') ? el : el.select('img').first()) : at === 'own' ? el.ownText() : el.attr(at);
      if (v) return String(v).trim();
    }
    return '';
  },
  url: function (pat, p, q) {
    var n = C.page(p);
    var u = String(pat);
    // {p} -> page number; [..{p}..] optional block removed on page 1
    u = u.replace(/\[([^\]]*)\]/g, function (m, inner) { return n > 1 ? inner : ''; });
    u = u.replace(/\{p\}/g, String(n)).replace(/\{p0\}/g, String(n - 1)).replace(/\{q\}/g, C.enc(q || '')).replace(/\{base\}/g, BASE_URL);
    return C.fix(u);
  },
  // `s` = 's_' when parsing a search result page whose cards differ from the list pages (G.s_item, G.s_title, ...)
  items: function (doc, s) {
    var k = function (n) { return (s && G[s + n]) || G[n]; };
    var els = doc.select(k('item')), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, k('link') || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, k('title') || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, k('cover') || 'img@img'), description: X.pick(e, k('desc') || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc, q ? 's_' : '');
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
    if (G.search_post) {
      // POST search form: { url, body } — body uses {q}; results are parsed like any list page
      var doc = C.html(X.url(G.search_post.url, p, key), { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: String(G.search_post.body).replace(/\{q\}/g, C.enc(key)) });
      var items = X.items(doc, 's_');
      return Response.success(items, null);
    }
    return X.listPage(G.search, p, key);
  },
  genre: function () {
    if (!G.genre) return Response.success([]);
    var doc = C.html(C.fix(G.genrePage || '/'));
    var out = doc.select(G.genre).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; });
    return Response.success(out.filter(function (g) { return g.title; }));
  },
  detail: function (url) {
    var doc = C.html(url, G.req);
    var genres = G.d_genres ? doc.select(G.d_genres).map(function (a) { return { title: a.text(), input: C.fix(a.attr('href')), script: 'search.js' }; }) : [];
    var status = X.pick(doc, G.d_status);
    return Response.success({
      name: X.pick(doc, G.d_title || 'h1'), cover: C.fix(X.pick(doc, G.d_cover || 'meta[property=og:image]@content')),
      author: X.pick(doc, G.d_author), description: X.pick(doc, (G.d_desc || 'meta[name=description]@content').replace(/$/, '')),
      detail: status ? 'Tình trạng: ' + status : '', ongoing: C.ongoing(status), genres: genres, host: BASE_URL
    });
  },
  toc: function (url) {
    if (G.ch_action) return X.actionToc(url);
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = G.ch_attr ? a.attr(G.ch_attr) : (a.attr('href') || a.attr('data-href'));
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
    // A movie page without an episode list is itself the one episode
    if (!list.length && G.ch_fallback_single) list.push({ name: G.ch_fallback_single === true ? 'Xem phim' : G.ch_fallback_single, url: url, host: BASE_URL });
    return Response.success(list);
  },
  pages: function (url) {
    var out = [], visited = [url], u = url;
    for (var guard = 0; guard < (G.pages_max || 40); guard++) {
      var doc = C.html(u, G.req);
      var imgs = doc.select(G.pages || '.page-chapter img, .reading-content img, .chapter-content img');
      for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s && out.indexOf(s) < 0) out.push(s); }
      if (!G.pages_next) break;
      var nx = doc.select(G.pages_next).first();
      if (!nx) break;
      var nu = C.fix(nx.attr('href'));
      if (!nu || visited.indexOf(nu) >= 0) break;
      visited.push(nu); u = nu;
    }
    return Response.success(out);
  },
  text: function (url) {
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    if (G.content_rsc) {
      var raw = X.rscText(body), locked = G.c_locked && new RegExp(G.c_locked, 'i').test(body);
      var lockMsg = locked ? '<p><i>🔒 Chương này bị khoá trên trang gốc — cần đăng nhập/mở khoá tại ' + BASE_URL + ' để đọc tiếp.</i></p>' : '';
      if (raw || locked) return Response.success(X.toParas(raw) + lockMsg, X.pick(Html.parse(body, url), G.c_title || 'h1 || title'));
    }
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)' + (body.length < 400 ? ': ' + body.replace(/\s+/g, ' ').slice(0, 200) : ''));
    }
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
  },
  // ---- Next.js App Router helpers (sites whose TOC comes from a Server Action and whose text lives in the RSC stream)
  // Server Action ids change on every deploy: try the known id first, then look the id up by its exported name in the page's chunks.
  rscAction: function (html, name) {
    var srcs = [], m, re = /\/_next\/static\/chunks\/[0-9A-Za-z_.-]+\.js/g;
    while ((m = re.exec(html))) if (srcs.indexOf(m[0]) < 0) srcs.push(m[0]);
    var pat = new RegExp('"([0-9a-f]{40,44})"[^"]{0,200}?"' + name + '"');
    for (var i = 0; i < srcs.length && i < 60; i++) {
      var r = C.get(BASE_URL + srcs[i]); if (!r || !r.ok) continue;
      var mm = pat.exec(r.text() || ''); if (mm) return mm[1];
    }
    return '';
  },
  rscArray: function (body) {
    var lines = String(body || '').split('\n');
    for (var i = 0; i < lines.length; i++) {
      var mm = /^[0-9a-f]+:(\[.*)$/.exec(lines[i]);
      if (mm) { try { var a = JSON.parse(mm[1]); if (a && a.length) return a; } catch (e) { } }
    }
    return null;
  },
  actionToc: function (url) {
    var A = G.ch_action, html = C.check(C.get(url, G.req), url).text() || '';
    var am = new RegExp(A.arg).exec(html);
    if (!am) return Response.error('Không tìm thấy mã truyện trên trang ' + url);
    var payload = JSON.stringify([am[1]]);
    var post = function (id) {
      var r = C.get(url, { method: 'POST', headers: { 'Next-Action': id, 'Accept': 'text/x-component', 'Content-Type': 'text/plain;charset=UTF-8' }, body: payload });
      return r && r.ok ? X.rscArray(r.text()) : null;
    };
    var arr = A.id ? post(A.id) : null;
    if (!arr) { var id2 = X.rscAction(html, A.name); if (id2 && id2 !== A.id) arr = post(id2); }
    if (!arr) return Response.error('Không lấy được danh sách chương (Server Action "' + A.name + '")');
    var base = url.replace(/[?#].*$/, '').replace(/\/+$/, '');
    return Response.success(arr.map(function (c) {
      return { name: String(c[A.title || 'label'] || '') + (A.lock && c[A.lock] ? ' 🔒' : ''), url: base + '/' + c[A.slug || 'slugId'], host: BASE_URL };
    }));
  },
  // Join the self.__next_f.push([1,"..."]) chunks and return the longest text row ("<id>:T<hex byte length>,<text>").
  rscText: function (html) {
    var s = '', m, re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
    while ((m = re.exec(html))) { try { s += JSON.parse(m[1]); } catch (e) { } }
    var best = '', tr = /([0-9a-f]+):T([0-9a-f]+),/g, t;
    while ((t = tr.exec(s))) {
      var n = parseInt(t[2], 16), i = tr.lastIndex, b = 0;
      while (i < s.length && b < n) { var c = s.charCodeAt(i); if (c < 0x80) b += 1; else if (c < 0x800) b += 2; else if (c >= 0xD800 && c <= 0xDBFF) { b += 4; i++; } else b += 3; i++; }
      var txt = s.slice(tr.lastIndex, i);
      if (txt.length > best.length) best = txt;
      tr.lastIndex = i;
    }
    return best;
  },
  toParas: function (txt) {
    if (/<p[\s>]|<br\s*\/?>/i.test(txt)) return txt;
    return txt.split(/\n+/).map(function (l) { l = l.trim(); return l ? '<p>' + l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>' : ''; }).join('');
  },
  // Video: list servers on the episode page, then sniff a playable stream from each.
  servers: function (url) {
    if (!G.servers) return Response.success([{ title: 'Server', data: url }]);
    var doc = C.html(url, G.req);
    var out = doc.select(G.servers).map(function (e) {
      var d = X.pick(e, G.server_data || ':self@data-link || :self@data-src || :self@href');
      return { title: e.text() || 'Server', data: C.fix(d) };
    }).filter(function (s) { return s.data; });
    return Response.success(out.length ? out : [{ title: 'Server', data: url }]);
  },
  sniff: function (text) {
    text = String(text || '').replace(/\\\//g, '/');
    var m = text.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || text.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i);
    return m ? m[0] : '';
  },
  track: function (data, depth) {
    depth = depth || 0;
    if (/\.(m3u8|mp4)(\?|$)/i.test(data)) return Response.success({ type: 'native', data: data, headers: { Referer: BASE_URL + '/' } });
    var r = C.get(data);
    var body = r.text();
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};


function execute(input, page) { return X.browse(input, page); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.Console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
