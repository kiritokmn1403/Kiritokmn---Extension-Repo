load('config.js');
load('lib_shortvideo.js');
function execute(url) {
  if (SV.server() && (SV.videoId(url) || /v\.douyin\.com\//.test(url))) {
    var out = SV.dtkStreams(SV.dtk('douyin/video', { url: url }).data);
    if (out.length) return Response.success(out);
  }
  return Response.success([{ title: 'Douyin (WebView)', data: url }]);
}
