var BASE_URL = "https://baby0world.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/search?query={q}",
 "item": "li.listItem",
 "title": "h4 || a@title",
 "link": "a@href",
 "d_title": "h2",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "desc": ".infoItem p",
 "s_item": "div.bookItemInfo",
 "s_title": "h4",
 "s_link": "h4 a@href",
 "s_cover": "img@img",
 "s_desc": ".bookItemDesc"
};
