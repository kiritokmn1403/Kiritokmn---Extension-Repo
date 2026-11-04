var BASE_URL = "https://101kks.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "完本": "/novels/full/0_{p}.html",
  "分類": "/novels/class/0_{p}.html",
  "熱門": "/novels/hot"
 },
 "search": "/search/{q}/{p}.html",
 "ch_list": "li a[href*='/txt/']",
 "item": "#article_list_content > li",
 "title": "h3",
 "link": "a[href*='/book/']@href",
 "cover": "img@img",
 "desc": "h4",
 "pageSize": 8,
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content",
 "d_author": "meta[property=og:novel:author]@content",
 "d_desc": "meta[property=og:description]@content",
 "d_status": "meta[property=og:novel:status]@content",
 "ch_rewrite": [
  "/book/(\\d+)\\.html.*$",
  "/ajax_novels/chapterlist/$1.html"
 ],
 "content": "#txtcontent",
 "c_title": "h1"
};
