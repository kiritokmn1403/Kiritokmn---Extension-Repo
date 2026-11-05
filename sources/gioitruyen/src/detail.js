load('config.js');
function execute(url) {
  var s = api("/stories/" + slugOf(url));
  var done = /COMPLETED|FINISHED/i.test(s.completionStatus || "");
  return Response.success({
    name: s.title, cover: cover(s), author: s.originalAuthor || s.translatorName || "",
    description: s.synopsis || "", detail: done ? "Tình trạng: Hoàn thành" : "Tình trạng: Đang ra",
    ongoing: !done, genres: [], host: BASE_URL
  });
}
