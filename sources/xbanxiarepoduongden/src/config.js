var BASE_URL = "https://www.xbanxia.cc";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/modules/article/search_t.php?searchkey={q}[&page={p}]",
 "item": ".pop-book",
 "title": "h2 || a@title || img@alt",
 "link": "a@href",
 "ch_list": "div.book-list li a",
 "d_title": "div.book-describe h1 || h1",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "s_item": "li.pop-book2",
 "s_title": "h2 || a@title",
 "s_link": "a@href",
 "s_cover": "img@data-original || img@img",
 "content": "#nr1"
};
