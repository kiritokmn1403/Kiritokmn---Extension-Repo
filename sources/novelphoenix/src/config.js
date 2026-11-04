var BASE_URL = "https://novelphoenix.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?keyword={q}[&page={p}]",
 "item": ".home-release-title-cell",
 "title": "[class*=title] a || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.csstransforms3d a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
