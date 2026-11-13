var BASE_URL = "https://animevn.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?q={q}",
 "item": "div.item:has(div.anime-cover)",
 "title": "h3 || .name || img@alt || a@title",
 "link": "a@href",
 "ch_list": "div.glo_contents a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content"
};
