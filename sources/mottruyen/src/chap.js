load('config.js');
function execute(url) {
  var m = /\/(\d+)\/chuong\/(\d+)/.exec(url);
  if (!m) return Response.error("URL chương không hợp lệ: " + url);
  var c = api("/story/" + m[1] + "/chapter/" + m[2]);
  var html = String(c.content || "");
  if (!html || c.lock) return Response.success("<p><i>🔒 Chương này cần mở khoá (xu) trên " + BASE_URL + " — đăng nhập và mở khoá trên trang để đọc.</i></p>", c.chapterTitle);
  return Response.success(html, "Chương " + c.chapter + (c.chapterTitle ? ": " + c.chapterTitle : ""));
}
