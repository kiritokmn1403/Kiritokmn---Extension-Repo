load('config.js');
function execute(data) {
  return Response.success({ type: 'native', data: data, headers: { 'User-Agent': 'com.google.ios.youtube/20.10.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)' } });
}
