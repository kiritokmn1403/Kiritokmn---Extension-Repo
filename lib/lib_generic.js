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
    var doc = C.html(G.ch_rewrite ? url.replace(new RegExp(G.ch_rewrite[0]), G.ch_rewrite[1]) : url, G.req);
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
      pages.push(nu); if (G.ch_delay) sleep(G.ch_delay); doc = C.html(nu, G.req);
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
    var r = C.check(C.get(url, G.req), url), body = r.text() || '';
    var doc = Html.parse(body, url);
    var el = doc.select(G.content || '#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content').first();
    if (!el) {
      if (/cf_chl|challenge-platform|cf-turnstile|Just a moment/i.test(body.slice(0, 20000))) throw new Error('CLOUDFLARE: trang ' + BASE_URL + ' yêu cầu xác minh. Mở chương bằng WebView trong ứng dụng, đợi qua bước kiểm tra rồi tải lại.');
      return Response.error('Không tìm thấy nội dung — trang nhận được: "' + (X.pick(doc, 'title') || '?').slice(0, 60) + '" (' + r.status + ', ' + body.length + ' ký tự)');
    }
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
    if (G.video && !depth) { var vv = X.pick(Html.parse(body, data), G.video); if (vv) return Response.success({ type: 'native', data: C.fix(vv), headers: { Referer: BASE_URL + '/' } }); }
    var s = X.sniff(body);
    if (s) return Response.success({ type: 'native', data: s, headers: { Referer: (depth ? data : BASE_URL + '/') } });
    var doc = Html.parse(body, data);
    var ifr = doc.select(G.iframe || 'iframe[src], iframe[data-src]').first();
    if (ifr && depth < 2) { var src = C.fix(ifr.attr('src') || ifr.attr('data-src')); if (src) return X.track(src, depth + 1); }
    return Response.success({ type: 'webview', data: data });
  }
};
