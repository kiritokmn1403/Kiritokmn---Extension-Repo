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
    // 0.0.4: "WP Manga Images Protection" gate — the chapter is only served to logged-in (Google) readers
    if (!doc.select('.reading-content, .read-container').size() && /WpmipAccess|wpmip-access/.test(doc.html())) throw new Error('Trang ' + BASE_URL + ' chỉ cho đọc khi đã đăng nhập (Google). Mở chương bằng WebView trong ứng dụng, đăng nhập rồi tải lại.');
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
