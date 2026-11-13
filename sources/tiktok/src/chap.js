load('config.js');
load('lib_shortvideo.js');
function execute(url) {
  var out;
  if (SV.server()) out = SV.dtkStreams(SV.dtk('tiktok/video', { url: url }).data);
  else out = SV.twStreams(SV.tw('/api/', { url: url, hd: 1 }));
  if (!out.length) return Response.success([{ title: 'Mở trên TikTok', data: url }]);
  return Response.success(out);
}
