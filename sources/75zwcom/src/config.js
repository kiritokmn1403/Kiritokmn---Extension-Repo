var BASE_URL = "https://m.75biquge.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?q={q}",
 "ch_list": "ul.vlist a",
 "item": "ul.vlist > li",
 "link": "a@href",
 "title": "[class*=name]",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.content"
};
