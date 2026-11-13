load('config.js');
function execute() {
  var t = [['Shorts', 'shorts:#shorts'], ['Âm nhạc', 'video:nhạc mới nhất'], ['Tin tức', 'video:tin tức hôm nay'], ['Phim hoạt hình', 'video:phim hoạt hình'], ['Game', 'video:gaming'], ['Shorts hài', 'shorts:hài hước']];
  return Response.success(t.map(function (x) { return { title: x[0], input: x[1], script: 'genre.js' }; }));
}
