var BASE_URL = "https://haccbl.xyz";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[page/{p}/]"
 },
 "search": "/?username={q}[&page={p}]",
 "item": "div.uk-panel.uk-position-relative > div.uk-overflow-hidden.uk-border-rounded",
 "title": "img@alt",
 "link": "a@href",
 "ch_list": "div.recent-comment-content.uk-background-muted a",
 "d_title": "h1 || meta[property=og:title]@content",
 "d_cover": "meta[property=og:image]@content || img@img",
 "d_desc": "meta[property=og:description]@content || meta[name=description]@content",
 "cover": "img@img",
 "pages": "div.uk-overflow-hidden.uk-border-rounded img"
};
