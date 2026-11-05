var BASE_URL = "https://truyencv.io";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?username={q}[&page={p}]",
 "item": "li.blog-item > a.blog-title",
 "title": ":self",
 "link": ":self@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "ch_list": "#menu-chinh a",
 "content": "div.uk-article-content.uk-margin"
};
