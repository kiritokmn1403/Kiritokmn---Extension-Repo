load('config.js');
var YT_UA = 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)';
function execute(data) {
  var s = String(data || ''), tr = { type: 'native', data: s, headers: { 'User-Agent': YT_UA } };
  // 0.0.5: {"v": video-only url, "a": audio url} from chap.js -> video + separate audio track
  if (s.charAt(0) === '{') {
    var o = JSON.parse(s);
    tr.data = o.v;
    if (o.a) tr.audios = [{ data: o.a, label: 'Âm thanh gốc' }];
  }
  return Response.success(tr);
}
