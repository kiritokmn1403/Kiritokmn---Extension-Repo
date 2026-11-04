var BASE_URL = "https://blbattu.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?username={q}[&page={p}]",
 "item": ".uk-panel",
 "title": "h3 a || a@title || img@alt",
 "link": "a@href",
 "ch_list": "#chapter-list a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
