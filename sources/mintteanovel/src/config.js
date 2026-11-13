var BASE_URL = "https://mintteanovel.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/?s={q}",
 "ch_list": "div.chapter-item a",
 "item": "div.uk-panel.uk-position-relative > div.uk-overflow-hidden.uk-border-rounded",
 "link": "a@href",
 "title": "img@alt",
 "cover": "img@img",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "content": "div.mtl-ticker-content",
 "ch_reverse": true
};
