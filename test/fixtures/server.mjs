import http from 'node:http';
const pages = {
  '/list': p => `<div class="book"><h3><a href="/truyen/a">Truyện A</a></h3><img data-src="/a.jpg"><span class="last">Chương 10</span></div><div class="book"><h3><a href="/truyen/b">Truyện B &amp; C</a></h3><img src="/b.jpg"></div>${p < 2 ? '<div class="pagination"><a class="next" href="?page=2">»</a></div>' : ''}`,
  '/search': () => `<div class="book"><h3><a href="/truyen/a">Truyện A</a></h3></div>`,
  '/truyen/a': () => `<h1>Truyện A</h1><div class="author">Tác giả X</div><div class="cover"><img src="/cover/a.jpg"></div><div class="desc"><p>Mô tả <b>hay</b></p></div><div class="status">Đang ra</div><div class="genre"><a href="/g/1">Tiên hiệp</a><a href="/g/2">Huyền huyễn</a></div><ul id="chapters"><li><a href="/truyen/a/c1">Chương 1</a></li><li><a href="/truyen/a/c2">Chương 2</a></li></ul><a class="more" href="/truyen/a/p2">more</a>`,
  '/truyen/a/p2': () => `<ul><li><a href="/truyen/a/c3">Chương 3</a></li></ul>`,
  '/truyen/a/c1': () => `<h2>Chương 1: Mở đầu</h2><div class="content"><p>Đoạn 1</p><script>x()</script><div class="ads">ad</div><p>Đoạn 2</p></div>`,
};
http.createServer((req, res) => { const u = new URL(req.url, 'http://x'); const f = pages[u.pathname]; res.writeHead(f ? 200 : 404, { 'content-type': 'text/html; charset=utf-8' }); res.end(f ? `<html><body>${f(+u.searchParams.get('page') || 1)}</body></html>` : 'nf'); }).listen(8765, () => console.log('fixture server on 8765'));
