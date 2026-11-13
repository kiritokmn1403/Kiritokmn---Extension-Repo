load('config.js');
load('lib_shortvideo.js');
function execute(data) {
  var h = /douyin\.com\/hot\/([^/?#]+)/.exec(data);
  if (h) return SV.webview('https://www.douyin.com/search/' + h[1]);
  if (/douyin\.com\/(video|search|hashtag|user|note)|v\.douyin\.com/.test(data)) return SV.webview(data);
  return Response.success({ type: 'native', data: data, headers: { 'Referer': 'https://www.douyin.com/', 'User-Agent': 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' } });
}
