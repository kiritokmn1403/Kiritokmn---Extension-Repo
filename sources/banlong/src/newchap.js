load('config.js');
function execute(url, page) {
    page = page || "1";
    let response = fetch(absUrl(url), { queries: { page: page } });
    if (!response.ok) return Response.error("HTTP " + response.status);
    let doc = response.html();

    let items = [];
    doc.select(".list-story__item li").forEach(function (e) {
        let title = e.select("p.line-clamp-1").first();
        if (!title) return;
        let tag = title.select(".prefix").text().replace(/[\[\]]/g, "");
        title.select(".prefix").remove();
        let chapter = e.select("a[href*=/chuong-]");
        let slug = storySlug("/" + chapter.attr("href"));
        if (!slug) return;
        items.push({
            name: title.text(),
            link: BASE_URL + "/truyen/" + slug,
            description: chapter.text(),
            tag: tag
        });
    });

    return Response.success(items, nextPageToken(doc));
}
