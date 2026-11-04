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
    return el.html().replace(/&nbsp;/g, ' ').replace(/(<br\s*\/?>\s*){3,}/gi, '<br><br>');
  },
  ongoing: function (s) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(s || ''); }
};
