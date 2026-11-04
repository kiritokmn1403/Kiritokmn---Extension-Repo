load('config.js');

function execute(url) {
    let bookId = url.match(/\/book\/(\d+)/);
    if (!bookId) return Response.success([]);
    bookId = bookId[1];

    let catalogUrl = BASE_URL + '/book/' + bookId + '/';
    sleep(3000);
    let doc = fetchDoc(catalogUrl);
    if (!doc) return Response.success([]);

    let list = [];
    // Only the catalog div with id="catalog"
    let links = doc.select('#catalog ul li a');
    links.forEach(function(a) {
        let href = a.attr('href');
        if (!href || href === '#') return;
        let name = tidy(a.text());
        if (!name || name.length < 2) return;
        let link = fullUrl(href);
        list.push({ name: name, url: link, host: BASE_URL });
    });

    list.reverse();
    return Response.success(list);
}