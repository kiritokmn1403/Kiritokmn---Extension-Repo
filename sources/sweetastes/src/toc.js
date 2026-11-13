load('config.js');
load('lib_common.js');
load('lib_generic.js');
// The chapter list is not in the HTML: the page POSTs bookid to /api/bookchapterlist and renders the JSON.
function execute(url) {
    var m = /\/book\/(\d+)/.exec(String(url));
    if (!m) return Response.error('Không nhận ra mã truyện: ' + url);
    var d = C.json(BASE_URL + '/api/bookchapterlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: 'bookid=' + m[1] + '&device='
    });
    var arr = (d && d.state && d.data) || [];
    var out = [];
    for (var i = 0; i < arr.length; i++) {
        var c = arr[i];
        out.push({ name: String(c.name || ('#' + (i + 1))) + (c.isvip && !c.isUnlocked ? ' 🔒' : ''), url: BASE_URL + '/book/chapter/' + c.id, host: BASE_URL });
    }
    return Response.success(out);
}
