load('config.js');

function execute(url) {
    url = url.replace(/\/$/, '');
    let doc = fetchDoc(url);
    if (!doc) return Response.error('Không tải được trang.');

    // Name: h1 or .book-title or meta og:title
    let name = '';
    let h1 = doc.select('h1').first();
    if (h1) name = cleanText(h1.text());
    if (!name) {
        let titleEl = doc.select('.book-title, .bookname, .btitle').first();
        if (titleEl) name = cleanText(titleEl.text());
    }
    if (!name) {
        let ogTitle = doc.select('meta[property="og:title"]').attr('content');
        if (ogTitle) {
            // Strip site suffix " - 69书吧" or similar
            name = cleanText(ogTitle.replace(/\s*[-–|]\s*69书吧.*$/, ''));
        }
    }

    // Cover: .book-img img or og:image
    let cover = '';
    let coverEl = doc.select('.book-img img, .pic img, img[src*="/article/"]').first();
    if (coverEl) cover = coverEl.attr('data-src') || coverEl.attr('src') || '';
    if (!cover || cover.indexOf('nocover') !== -1 || cover.indexOf('/images/user') !== -1) {
        let ogImg = doc.select('meta[property="og:image"]').attr('content');
        if (ogImg) cover = ogImg;
    }

    // Author: text after "作者：" or .author a
    let author = '';
    let authorEl = doc.select('a[href*="/author.php"], a[href*="author="], span.author a').first();
    if (authorEl) author = cleanText(authorEl.text());
    if (!author) {
        // Breadcrumb or info row
        let infoText = doc.select('.book-info, .detail-info, .info').text();
        let m = infoText.match(/作者[：:]\s*(.+)/);
        if (m) author = m[1].trim();
    }
    if (!author) {
        // Try meta
        let metaAuthor = doc.select('meta[name="author"]').attr('content');
        if (metaAuthor) author = cleanText(metaAuthor);
    }

    // Description: .intro or .book-desc or meta description
    let description = '';
    let descEl = doc.select('.intro, .book-intro, .desc, .description, .book_desc, #bookIntro').first();
    if (descEl) {
        descEl.select('script, style, ins, iframe').remove();
        description = descEl.html().trim();
    }
    if (!description) {
        let metaDesc = doc.select('meta[name="description"]').attr('content');
        if (metaDesc) description = cleanText(metaDesc);
    }

    // Status: "全本" or "连载" in page text
    let ongoing = true;
    let statusText = doc.select('.book-info, .detail-info, .info, .state').text();
    if (statusText.indexOf('全本') !== -1 || statusText.indexOf('完本') !== -1 || statusText.indexOf('完结') !== -1) {
        ongoing = false;
    }

    // Categories / genres from breadcrumb or tags
    let genres = [];
    doc.select('.bread a, .location a, .tag a, a[href*="/class/"], a[href*="/tag/"]').forEach(a => {
        let t = cleanText(a.text());
        if (t && t.length < 10 && genres.indexOf(t) === -1) {
            genres.push({ title: t, input: absoluteUrl(a.attr('href')), script: 'gen.js' });
        }
    });

    // Detail info line
    let detailParts = [];
    if (author) detailParts.push('作者: ' + author);

    // Word count / chapter count
    let infoText = doc.select('.book-info, .detail-info').text();
    let wcMatch = infoText.match(/([\d.]+)\s*万?字/);
    if (wcMatch) detailParts.push('字数: ' + wcMatch[0]);
    let chMatch = infoText.match(/(\d+)\s*章/);
    if (chMatch) detailParts.push('章节: ' + chMatch[0]);

    detailParts.push('状态: ' + (ongoing ? '连载' : '全本'));

    if (cover) cover = absoluteUrl(cover);

    return Response.success({
        name: name,
        cover: cover,
        author: author,
        description: description,
        detail: detailParts.join('<br>'),
        ongoing: ongoing,
        genres: genres.length > 0 ? genres : undefined,
        host: BASE_URL
    });
}