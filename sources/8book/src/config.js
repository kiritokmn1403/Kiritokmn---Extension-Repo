var BASE_URL = "https://www.8book.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/search/?key={q}[&page={p}]",
 "item": ".picsize",
 "title": "a@title || img@alt || a@title || img@alt",
 "link": "a@href",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || .thumb img@img || .poster img@img || img@img",
 "d_desc": "meta[name=description]@content",
 "ch_list": "#chapters a.episode_li",
 "content": "#text, .text, #content, .content",
 "s_item": "a.nowraphide",
 "s_link": ":self@href",
 "s_title": "li.nowraphide",
 "s_desc": "div.row_detail",
 "s_cover": "img@img",
 "q_cut": "[，,：:！!？?]"
};
