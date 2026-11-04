var BASE_URL = "https://novelnext.me";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?fluid-switch={q}[&page={p}]",
 "item": ".item",
 "title": "h3 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.col-xs-12 a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
