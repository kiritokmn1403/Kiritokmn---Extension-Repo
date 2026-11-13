var BASE_URL = "https://hentaivietsub.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?k={q}[&page={p}]",
 "item": "div.list-items > div.item-box",
 "title": "h3 || .item-box__title || img@alt || a@title",
 "link": "a@href",
 "ch_list": "a.__none__",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_fallback_single": "Xem phim",
 "servers": "button.set-player-source",
 "server_data": ":self@data-source"
};
