load('config.js');
function execute(url, page) {
    page = page || "1";
    let response = fetch(absUrl(url), { queries: { page: page } });
    if (!response.ok) return Response.error("HTTP " + response.status);
    let doc = response.html();

    let items = [];
    doc.select(".basis-full").first().select(".novel-item").forEach(function (e) {
        let link = e.select("h3 a");
        items.push({
            name: link.text(),
            link: absUrl(link.attr("href")),
            cover: e.select("img").attr("src"),
            description: e.select("a.author").text() + " - " + e.select(".story-info").text(),
            tag: e.select(".story-status").text() || e.select("a[href^=danh-muc]").text()
        });
    });

    return Response.success(items, nextPageToken(doc));
}
