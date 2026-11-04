var BASE_URL = "https://thegioitruyen.vn";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?s={q}[&page={p}]",
 "item": ".tgt-card",
 "title": "[class*=title] || a@title || img@alt",
 "link": "a@href",
 "ch_list": "section.tgt-section a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
