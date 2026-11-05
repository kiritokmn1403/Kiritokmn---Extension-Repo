var BASE_URL = "https://www.sobqg.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "ul.g_row.hom-rec > li.g_col_2.mb20",
 "title": "h3",
 "link": "a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "div.g_browse_panel.g_browse_sub a",
 "cover": "img@img",
 "content": "div.g_col_9"
};
