var BASE_URL = "https://www.pornhub.com";
try { if (DOMAIN) BASE_URL = String(DOMAIN).replace(/\/+$/, ""); } catch (e) {}
var G = {
 "tabs": {
  "Mới cập nhật": "/[?page={p}]"
 },
 "search": "/video/search?search={q}[&page={p}]",
 "ch_list": "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]",
 "item": "li:has(div.singleVideo)",
 "link": "a[href*=view_video]@href",
 "title": "a[title]@title || img@alt || .title a",
 "cover": "img@src || img@data-mediumthumb",
 "single": "Xem video"
};
