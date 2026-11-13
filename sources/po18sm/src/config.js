var BASE_URL = "https://www.po18sm.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "item": "tr:has(td.nowrap.px13)",
 "title": "td.nowrap.px13 a",
 "link": "td.nowrap.px13 a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "search_post": {
  "url": "/modules/article/search.php",
  "body": "searchkey={q}"
 },
 "s_item": "tr:has(td a[href*=\".html\"])"
};
