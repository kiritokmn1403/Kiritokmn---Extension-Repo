load('config.js');
load('lib_shortvideo.js');
function execute(data) {
  if (/tiktok\.com\/@|tiktok\.com\/video/.test(data) && !/\.mp4|tikwm\.com\/video/.test(data)) {
    var id = SV.videoId(data);
    return SV.webview(id ? 'https://www.tiktok.com/player/v1/' + id + '?autoplay=1' : data);
  }
  return Response.success({ type: 'native', data: data, headers: { 'Referer': 'https://www.tiktok.com/', 'User-Agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' } });
}
