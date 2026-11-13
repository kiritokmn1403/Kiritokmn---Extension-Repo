load('config.js');
load('lib_shortvideo.js');
function execute() {
  var t = [{ title: '热榜 · Tìm kiếm nóng', input: 'hot', script: 'genre.js' }];
  if (SV.server()) {
    t.push({ title: '挑战 · Thử thách (hashtag)', input: 'challenge', script: 'genre.js' });
    t.push({ title: '娱乐 · Giải trí', input: 'entertainment', script: 'genre.js' });
    t.push({ title: '社会 · Xã hội', input: 'society', script: 'genre.js' });
  }
  return Response.success(t);
}
