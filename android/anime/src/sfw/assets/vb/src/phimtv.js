__register({ META: {"id":"phimtv","name":"PhimTV","source":"https://phimtv.my","type":"video","locale":"vi","nsfw":false,"version":1,"config":{"DOMAIN":{"title":"Tên miền","subtitle":"Đổi khi trang đổi tên miền","default":"https://phimtv.my","values":["https://phimtv.my","https://phimtv2.com"],"mode":"select","format":"single"}},"configDefaults":{"DOMAIN":"https://phimtv.my"}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"track": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"browse": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://phimtv.my";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?search={q}[&page={p}]",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.latest-episode a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
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
    return r;
  },
  html: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.html(opt && opt.charset);
  },
  json: function (url, opt) {
    var r = C.get(url, opt);
    if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url);
    return r.json();
  },
  page: function (p) { var n = parseInt(p || '1', 10); return isNaN(n) || n < 1 ? 1 : n; },
  next: function (hasMore, p) { return hasMore ? String(C.page(p) + 1) : ''; },
  isUrl: function (s) { return /^(https?:)?\/\//.test(s || '') || (s || '').charAt(0) === '/'; },
  enc: function (s) { return encodeURIComponent(s || ''); },
  // Remove ads/scripts and empty paragraphs from novel content
  cleanContent: function (el) {
    el.select('script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form').remove();
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
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
  items: function (doc) {
    var els = doc.select(G.item), out = [], seen = {};
    for (var i = 0; i < els.size(); i++) {
      var e = els.get(i);
      var link = X.pick(e, G.link || 'a@href');
      if (!link || seen[link] || /^javascript|#$/.test(link)) continue;
      var name = X.pick(e, G.title || 'h3 || h2 || a@title || img@alt');
      if (!name) continue;
      seen[link] = 1;
      out.push({ name: name, link: C.fix(link), cover: X.pick(e, G.cover || 'img@img'), description: X.pick(e, G.desc || ''), host: BASE_URL });
    }
    return out;
  },
  listPage: function (pat, p, q) {
    var doc = C.html(X.url(pat, p, q), G.req);
    var items = X.items(doc);
    var more = G.next ? doc.select(G.next).size() > 0 : items.length >= (G.pageSize || 10);
    return Response.success(items, C.next(more && items.length > 0, p));
  },
  browse: function (input, p) {
    var pat = (G.tabs && G.tabs[input]) || input;
    return X.listPage(pat, p, '');
  },
  search: function (key, p) {
    if (C.isUrl(key)) { var u = C.fix(key); return X.listPage(u + (u.indexOf('?') > 0 ? '&' : '?') + (G.pageParam || 'page') + '={p}', p, ''); }
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
    if (G.single) return Response.success([{ name: G.single === true ? 'Xem / Đọc' : G.single, url: url, host: BASE_URL }]);
    var pages = [url], list = [], seen = {};
    var doc = C.html(url, G.req);
    if (G.ch_url) { var cu = X.pick(doc, G.ch_url); if (cu) { doc = C.html(C.fix(cu), G.req); } }
    for (var guard = 0; guard < (G.ch_maxPages || 60); guard++) {
      var els = doc.select(G.ch_list);
      for (var i = 0; i < els.size(); i++) {
        var a = els.get(i); var href = a.attr('href') || a.attr('data-href');
        if (!href || href === '#' || seen[href]) continue;
        seen[href] = 1; list.push({ name: (G.ch_name ? X.pick(a, G.ch_name) : a.text()) || a.attr('title'), url: C.fix(href), host: BASE_URL });
      }
      var nx = G.ch_next ? doc.select(G.ch_next).first() : null;
      if (!nx || !nx.attr('href')) break;
      var nu = C.fix(nx.attr('href'));
      if (pages.indexOf(nu) >= 0) break;
      pages.push(nu); doc = C.html(nu, G.req);
    }
    if (G.ch_reverse) list.reverse();
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
    var doc = C.html(url, G.req);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung');
    return Response.success(C.cleanContent(el), X.pick(doc, G.c_title || 'h1 || h2'));
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
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
