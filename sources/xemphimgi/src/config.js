var BASE_URL = "https://xemphimgi.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?s={q}[&page={p}]",
 "item": ".movie-poster",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.episodes-grid a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_reverse": true,
 "ch_fallback_single": true
};
