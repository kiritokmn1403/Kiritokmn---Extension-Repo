var BASE_URL = "https://quanben.io";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/index.php?c=book&a=search&keywords={q}",
 "ch_list": "div.tool_button a",
 "item": "ul.list > li",
 "link": "a@href",
 "title": "a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.description",
 "s_item": "div.box > div > div.list2",
 "s_title": "h3 a",
 "s_link": "h3 a@href",
 "s_cover": "img@img"
};
