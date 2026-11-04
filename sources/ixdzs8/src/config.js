var BASE_URL = "https://ixdzs8.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/bsearch?q={q}[&page={p}]",
 "item": ".l-img",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "#a-list ul.u-chapter a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "content": ".page-content, article.page-content, #content, .content"
};
