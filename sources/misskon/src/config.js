var BASE_URL = "https://misskon.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?s={q}[&page={p}]",
 "item": ".post-thumbnail",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.entry a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "single": true,
 "pages": ".entry img",
 "pages_next": ".page-link a.post-page-numbers:last-child, a.post-page-numbers.next"
};
