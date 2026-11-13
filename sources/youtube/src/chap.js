load('config.js');
load('yt.js');
function execute(url) {
  var p = YT.player(YT.id(url)), sd = p.streamingData || {}, out = [];
  if (sd.hlsManifestUrl) out.push({ title: 'Tự động (HLS)', data: sd.hlsManifestUrl });
  (sd.formats || []).filter(function (f) { return f.url; }).sort(function (a, b) { return (b.height || 0) - (a.height || 0); })
    .forEach(function (f) { out.push({ title: (f.qualityLabel || f.quality || 'MP4') + ' (có tiếng)', data: f.url }); });
  if (!out.length) (sd.adaptiveFormats || []).filter(function (f) { return f.url && /video\/mp4/.test(f.mimeType); }).slice(0, 2).forEach(function (f) { out.push({ title: (f.qualityLabel || 'MP4') + ' (không tiếng)', data: f.url }); });
  if (!out.length) throw new Error('YouTube không trả về luồng phát cho video này');
  return Response.success(out);
}
