var BASE_URL = "https://truyendexuat.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/tim-kiem?keyword={q}[&page={p}]",
 "ch_list": "#chapterGrid a",
 "item": "ul.ranking-list > li.ranking-item",
 "link": "a@href",
 "title": "[class*=title]",
 "cover": "img@img",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.uk-width-1-1.reading"
};
