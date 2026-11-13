var BASE_URL = "https://viblo.asia";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?q={q}",
 "ch_list": "div.support-article a",
 "item": "div.post-feed-item",
 "link": "h3 a@href || a[href*=/p/]@href",
 "title": "h3",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": ".md-contents, article .md-contents, .post-body",
 "single": "Đọc bài viết"
};
