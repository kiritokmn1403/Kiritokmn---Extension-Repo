load('config.js');
function execute(url) {
  var m = /\/truyen\/([^\/?#]+)\/chuong-([\d.]+)/.exec(url);
  if (!m) return Response.error("URL chương không hợp lệ: " + url);
  var c = api("/stories/" + m[1] + "/chapters/by-number/" + m[2]);
  var html = c.contentHtml || c.content || "";
  if (!html) return Response.success("<p><i>🔒 Chương này cần mở khoá (xu) trên " + BASE_URL + " — đăng nhập và mở khoá trên trang để đọc.</i></p>", c.title);
  return Response.success(html, c.title);
}
