var BASE_URL = "https://novelphoenix.net";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search?keyword={q}",
 "item": "ul.home-release-list.fwn-latest-list > li > div.home-release-title-cell",
 "title": "[class*=title] a",
 "link": "[class*=title] a@href",
 "ch_list": "#idData a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "content": "#chapter-content",
 "s_item": "div.ul-list1.ul-list1-2 > div.li-row",
 "s_title": "h3 a",
 "s_link": "h3 a@href",
 "s_cover": "img@img"
};
