load('config.js');
function execute(url) {
  var m = /book\/(\d+)\/(\d+)/.exec(url);
  if (!m) return Response.error("URL chương không hợp lệ: " + url);
  var c = api("/api/chapter?token=" + token({ id: parseInt(m[1], 10), chapterid: parseInt(m[2], 10) }));
  var txt = String(c.txt || "");
  if (!txt) return Response.error("Không có nội dung chương");
  var html = txt.split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) { return "<p>" + l.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</p>"; }).join("");
  return Response.success(html, c.chaptername);
}
