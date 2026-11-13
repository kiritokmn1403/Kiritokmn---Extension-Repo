load('config.js');
load('yt.js');
// 0.0.5: the IOS client usually returns no muxed "formats" (video + sound) and no HLS manifest, only adaptive
// streams. Video-only streams are now paired with the best AAC audio stream; track.js hands the audio to the
// player as a separate audio track (Aniyomi mpv / Mangayomi media_kit play both together).
function execute(url) {
  var p = YT.player(YT.id(url)), sd = p.streamingData || {}, out = [];
  if (sd.hlsManifestUrl) out.push({ title: 'Tự động (HLS)', data: sd.hlsManifestUrl });
  (sd.formats || []).filter(function (f) { return f.url; }).sort(function (a, b) { return (b.height || 0) - (a.height || 0); })
    .forEach(function (f) { out.push({ title: (f.qualityLabel || f.quality || 'MP4') + ' (có tiếng)', data: f.url }); });
  var ad = (sd.adaptiveFormats || []).filter(function (f) { return f.url; });
  var audio = ad.filter(function (f) { return /^audio\/mp4/.test(f.mimeType); }).sort(function (a, b) { return (b.bitrate || 0) - (a.bitrate || 0); })[0];
  if (audio) {
    var seen = {};
    ad.filter(function (f) { return /^video\/mp4/.test(f.mimeType) && /avc1/.test(f.mimeType) && (f.height || 0) <= 1080; })
      .sort(function (a, b) { return (b.height || 0) - (a.height || 0) || (b.bitrate || 0) - (a.bitrate || 0); })
      .forEach(function (f) {
        var q = f.qualityLabel || (f.height + 'p');
        if (seen[q]) return; seen[q] = 1;
        out.push({ title: q, data: JSON.stringify({ v: f.url, a: audio.url }) });
      });
  }
  if (!out.length) ad.filter(function (f) { return /video\/mp4/.test(f.mimeType); }).slice(0, 2).forEach(function (f) { out.push({ title: (f.qualityLabel || 'MP4') + ' (không tiếng)', data: f.url }); });
  if (!out.length) throw new Error('YouTube không trả về luồng phát cho video này');
  return Response.success(out);
}
