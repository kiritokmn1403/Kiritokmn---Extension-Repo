load('config.js');

function execute(key, page) {
    if (!page) page = '1';
    key = (key || '').trim();
    if (!key) return Response.success([], '');

    // 69shuba search uses POST form on homepage
    // Form: <form action="/modules/article/search.php" method="post">
    // Inputs: searchkey, searchtype=articlename
    // Falls back to GET for pagination

    let browser = Engine.newBrowser();
    let doc = null;

    try {
        browser.launch(BASE_URL, 8000);
        // Fill search form and submit
        browser.callJs(
            'var form=document.querySelector("form[action*=\'search\']");' +
            'if(!form){form=document.forms[0];}' +
            'var input=form.querySelector("input[name=\'searchkey\']");' +
            'if(!input){input=form.querySelector("input[type=\'text\']");}' +
            'if(!input){input=document.querySelector("input[name=\'searchkey\'],input[name=\'s\'],input[name=\'q\'],input[name=\'keyword\']");}' +
            'if(input){input.value=' + JSON.stringify(key) + ';}' +
            'if(form){form.submit();}',
            500
        );
        browser.waitUrl('.*?(search|searchkey).*', 12000);
        sleep(500);
        doc = browser.html();
    } catch (e) {
        try { browser.close(); } catch (ce) {}
        return Response.success([], '');
    }

    if (!doc) {
        try { browser.close(); } catch (ce) {}
        return Response.success([], '');
    }

    // Parse results
    let list = [];
    doc.select('.librarylist li, .novelslist li, .novelslist2 li, ul.list li, .booklist li').forEach(item => {
        let titleEl = item.select('h3 a, h2 a, a[href*="/book/"]').first();
        if (!titleEl) return;

        let name = cleanText(titleEl.text());
        let link = absoluteUrl(titleEl.attr('href'));
        if (!name || !link) return;

        let cover = '';
        let coverEl = item.select('img').first();
        if (coverEl) {
            let src = coverEl.attr('data-src') || coverEl.attr('src') || '';
            if (src.indexOf('nocover') === -1 && src.indexOf('/images/user') === -1) cover = src;
        }

        let descParts = [];
        let authorEl = item.select('.author, em, cite').first();
        if (authorEl) descParts.push(cleanText(authorEl.text()));
        let statusEl = item.select('.state').first();
        if (statusEl) descParts.push(cleanText(statusEl.text()));

        list.push({
            name: name,
            link: link,
            cover: absoluteUrl(cover),
            description: descParts.join(' | '),
            host: BASE_URL
        });
    });

    // Pagination: if page > 1, try GET with page param
    let next = '';
    if (list.length >= 10) {
        next = String(parseInt(page) + 1);
    }
    // Check pagination links
    let pagination = doc.select('.page a, .pagelist a, .pagination a');
    if (pagination.size() > 0) {
        let current = parseInt(page);
        let found = false;
        pagination.forEach(a => {
            let pText = cleanText(a.text());
            let pNum = parseInt(pText);
            if (!found && pNum > current) {
                next = String(pNum);
                found = true;
            }
        });
    }

    try { browser.close(); } catch (ce) {}

    return Response.success(list, next);
}