var BASE_URL = "https://thegioitruyen.vn";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/search/{q}",
 "item": "div.tgt-card > a.tgt-card-thumb",
 "title": "img@alt",
 "link": ":self@href",
 "ch_list": "#chapter-list a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "pages": "div.tgt-reader-pages img",
 "s_item": "div.wp-block-group.alignfull > h2.wp-block-post-title.has-x-large-font-size",
 "s_title": "a",
 "s_link": "a@href",
 "s_cover": ""
};
