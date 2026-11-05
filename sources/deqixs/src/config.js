var BASE_URL = "https://www.deqixs.org";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/modules/article/search.php?searchkey={q}",
 "item": ".item",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "ch_list": "#list ul a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "content": "#content, .con, .content",
 "s_item": "div.container > div.item",
 "s_title": "img@alt",
 "s_link": "a@href",
 "s_cover": "img@img"
};
