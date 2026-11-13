load('config.js');
load('lib_shortvideo.js');
function execute(url) {
  var h = /\/hashtag\/(\d+)/.exec(url);
  if (h && SV.server()) {
    var j = SV.dtk('douyin/hashtag/posts', { hashtag_id: h[1], count: 30 });
    return Response.success(SV.dtkItems(j).map(function (c) { return { name: SV.title(c.title || c.description, c.content_id), url: c.web_url, host: BASE_URL }; }));
  }
  return Response.success([{ name: SV.videoId(url) ? 'Xem video' : 'Mở trên Douyin', url: url, host: BASE_URL }]);
}
