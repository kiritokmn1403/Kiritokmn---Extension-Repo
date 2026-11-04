load('config.js');

function execute(url, page) {
    if (!page) page = '1';

    let full = fullUrl(url);
    if (page !== '1') {
        // Format 1: /novels/xxx_0_1.htm -> /novels/xxx_0_N.htm
        if (/_\d+\.htm$/.test(full)) {
            full = full.replace(/_\d+\.htm$/, '_' + page + '.htm');
        } else {
            // Format 2: /novels/full/0.htm -> /novels/full/0/N.htm
            full = full.replace(/\.htm$/, '/' + page + '.htm');
        }
    }

    let doc = fetchDoc(full);
    if (!doc) return Response.success([]);

    let list = [];
    let seen = {};

    let items = doc.select('#article_list_content li');
    if (items.size() === 0) {
        items = doc.select('.librarylist li, .novelslist li, .novelslist2 li');
    }

    items.forEach(function(item) {
        let titleEl = item.select('h3 a, h2 a').first();
        if (!titleEl) titleEl = item.select('a[href*="/book/"]').first();
        if (!titleEl) return;

        let href = titleEl.attr('href');
        let link = fullUrl(href);
        let m = link.match(/\/book\/(\d+)/);
        if (!m || seen[m[1]]) return;
        seen[m[1]] = true;

        let name = tidy(titleEl.text());
        if (!name || name.length < 2) return;

        let cover = '';
        let imgbox = item.select('.imgbox img').first();
        if (imgbox) {
            cover = imgbox.attr('data-src') || imgbox.attr('src') || '';
        }
        if (!cover || cover.indexOf('nocover') !== -1) {
            let anyImg = item.select('img').first();
            if (anyImg) cover = anyImg.attr('data-src') || anyImg.attr('src') || '';
        }
        if (cover.indexOf('nocover') !== -1) cover = '';

        let descParts = [];
        let labels = item.select('.newnav label, label');
        for (let i = 0; i < labels.size() && i < 3; i++) {
            let t = tidy(labels.get(i).text());
            if (t && t.length < 20) descParts.push(t);
        }

        list.push({
            name: name, link: link, cover: fullUrl(cover),
            description: descParts.join(' | '), host: BASE_URL
        });
    });

    let next = '';
    if (list.length >= 10) next = String(parseInt(page) + 1);

    return Response.success(list, next);
}