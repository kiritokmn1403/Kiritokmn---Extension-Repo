load('config.js');
function execute(url) {
  var s = api("/story/" + storyId(url));
  var genres = (s.category || []).map(function (c) { return { title: c.name, input: c.index || c.id, script: "browse.js" }; });
  return Response.success({
    name: String(s.name || "").trim(), cover: img(s.image || s.thumbnail), author: s.author ? s.author.name : "",
    description: String(s.introduce || "").replace(/\n/g, "<br>"),
    detail: "Số chương: " + (s.countChapter || "?") + "<br>Tình trạng: " + (s.finish ? "Hoàn thành" : "Đang ra"),
    ongoing: !s.finish, genres: genres, host: BASE_URL
  });
}
