__register({ META: {"id":"doctruyentranhbl","name":"Đọc Truyện Tranh BL","source":"https://truyentranhbl.com","type":"comic","locale":"vi","nsfw":false,"version":1,"config":{"DOMAIN":{"title":"Tên miền","subtitle":"Đổi khi trang đổi tên miền","default":"https://truyentranhbl.com","values":["https://truyentranhbl.com"],"mode":"input","format":"text"}},"configDefaults":{"DOMAIN":"https://truyentranhbl.com"}}, SCRIPTS: {
"home": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute() { return Response.success([{ title: "Mới cập nhật", input: "latest", script: "browse.js" }, { title: "Xem nhiều", input: "views", script: "browse.js" }, { title: "Đánh giá cao", input: "rating", script: "browse.js" }, { title: "Truyện mới", input: "new-manga", script: "browse.js" }]); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"search": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute(key, page) { return M.search(key, page); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"detail": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute(url) { return M.detail(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"toc": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute(url) { return M.toc(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"chap": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute(url) { return M.pages(url); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
},
"browse": function (__env, __cfg) {
return (function (fetch, Http, Html, Response, localStorage, cacheStorage, localConfig, localCookie, sleep, Log, console, log, UserAgent, Engine, Graphics, Script) {
var DOMAIN = __cfg("DOMAIN");
return (function () {

var BASE_URL = "https://truyentranhbl.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var MADARA = {"path": "truyen"};



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



// Madara (WordPress "wp-manga") theme — used by many Vietnamese comic & novel sites.
// Requires lib_common.js and BASE_URL. Optional overrides via global MADARA = { path: 'manga', novel: bool }.
var M = {
  path: function () { return (typeof MADARA !== 'undefined' && MADARA.path) || 'manga'; },
  card: function (e) {
    var a = e.select('.post-title a, h3 a, h4 a, .item-summary a').first() || e.select('a').first();
    if (!a) return null;
    var name = a.text() || a.attr('title') || e.select('img').attr('alt');
    var last = e.select('.chapter a, .list-chapter .chapter-item a, .latest-chap a, .my-chapter-name a').first();
    return { name: name, link: a.attr('href'), cover: C.img(e.select('img').first()), description: last ? last.text() : '', host: BASE_URL };
  },
  list: function (doc) {
    var els = doc.select('.c-tabs-item__content, .page-item-detail, .manga-item, .comic-list-item, .comic-block');
    var out = [], seen = {};
    for (var i = 0; i < els.size(); i++) { var c = M.card(els.get(i)); if (c && c.link && !seen[c.link]) { seen[c.link] = 1; out.push(c); } }
    return out;
  },
  hasNext: function (doc, n) {
    return doc.select('.nav-previous a, a.nextpostslink, .wp-pagenavi a.next, a.next.page-numbers, .pagination a.next, a[rel=next]').size() > 0
      || doc.select('a[href*="/page/' + (n + 1) + '"]').size() > 0;
  },
  browse: function (order, p) {
    var n = C.page(p);
    var url = BASE_URL + '/' + M.path() + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?m_orderby=' + (order || 'latest');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  search: function (key, p) {
    if (C.isUrl(key)) return M.byUrl(key, p);
    var n = C.page(p);
    var url = BASE_URL + '/' + (n > 1 ? 'page/' + n + '/' : '') + '?s=' + C.enc(key) + '&post_type=wp-manga';
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  byUrl: function (u, p) {
    var n = C.page(p);
    var url = C.fix(u).replace(/\/$/, '') + '/' + (n > 1 ? 'page/' + n + '/' : '');
    var doc = C.html(url);
    var items = M.list(doc);
    return Response.success(items, C.next(M.hasNext(doc, n) && items.length > 0, p));
  },
  detail: function (url) {
    var doc = C.html(url);
    var genres = doc.select('.genres-content a, .wp-manga-genres a, .manga-genres a').map(function (a) { return { title: a.text(), input: a.attr('href'), script: 'search.js' }; });
    var status = C.text(doc, ['.post-status .summary-content', '.manga-status', '.post-content_item:contains(Tình trạng) .summary-content', '.post-content_item:contains(Status) .summary-content']);
    var desc = doc.select('.description-summary .summary__content, .summary__content, .manga-excerpt, .description-summary, .manga-summary').first();
    return Response.success({
      name: C.text(doc, ['.post-title h1', '.post-title h3', 'h1']),
      cover: C.img(doc.select('.summary_image img, .tab-summary img').first()),
      author: C.text(doc, ['.author-content a', '.author-content', '.artist-content a']),
      description: desc ? desc.html() : '',
      detail: status ? 'Tình trạng: ' + status : '',
      ongoing: C.ongoing(status),
      genres: genres,
      host: BASE_URL
    });
  },
  chapterEls: function (doc, url) {
    var els = doc.select('li.wp-manga-chapter a, .listing-chapters_wrap li a, .version-chap li a');
    if (els.size() > 0) return els;
    var base = url.replace(/\/$/, '') + '/';
    var r = fetch(base + 'ajax/chapters/', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Referer': base } });
    if (r.ok) { els = r.html().select('li.wp-manga-chapter a'); if (els.size() > 0) return els; }
    var id = doc.select('#manga-chapters-holder').attr('data-id') || doc.select('.rating-post-id').attr('value') || doc.select('input.rating-post-id').attr('value');
    if (id) {
      r = fetch(BASE_URL + '/wp-admin/admin-ajax.php', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'action=manga_get_chapters&manga=' + id });
      if (r.ok) return r.html().select('li.wp-manga-chapter a');
    }
    return els;
  },
  toc: function (url) {
    var doc = C.html(url);
    var els = M.chapterEls(doc, url);
    var list = [];
    for (var i = els.size() - 1; i >= 0; i--) {
      var a = els.get(i);
      var href = a.attr('href');
      if (!href || href === '#') continue;
      list.push({ name: a.text().trim(), url: href, host: BASE_URL });
    }
    return Response.success(list);
  },
  pages: function (url) {
    var u = url.indexOf('?') > 0 ? url : url.replace(/\/$/, '') + '/?style=list';
    var doc = C.html(u);
    var imgs = doc.select('.reading-content img, .page-break img, .read-container img');
    var out = [];
    for (var i = 0; i < imgs.size(); i++) { var s = C.img(imgs.get(i)); if (s) out.push(s); }
    return Response.success(out);
  },
  text: function (url) {
    var doc = C.html(url);
    var el = doc.select('.reading-content .text-left, .reading-content .text-right, .reading-content, .entry-content').first();
    if (!el) return Response.error('Không tìm thấy nội dung chương');
    return Response.success(C.cleanContent(el), C.text(doc, ['#chapter-heading', '.breadcrumb li.active', 'h1']));
  }
};


function execute(input, page) { return M.browse(input, page); }

return typeof execute === 'function' ? execute : undefined;
})();
})(__env.fetch, __env.Http, __env.Html, __env.Response, __env.localStorage, __env.cacheStorage, __env.localConfig, __env.localCookie, __env.sleep, __env.Log, __env.console, __env.log, __env.UserAgent, __env.Engine, __env.Graphics, __env.Script);
}
} });
