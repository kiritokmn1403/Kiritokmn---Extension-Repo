load('config.js');
function execute(url) {
    url = normalizeUrl(url);
    let response = fetch(url);
    if (!response.ok) return Response.error("HTTP " + response.status);
    let doc = response.html();

    let info = doc.select(".info-story");
    let title = info.select("h1").first();
    if (!title) return Response.error("Không tìm thấy truyện");
    title.select(".prefix").remove();

    let details = [];
    info.select("p.text-info").forEach(function (e) {
        details.push(e.text());
    });
    details.push(info.select(".story-info").text());

    let tags = info.select("a[href^=the-loai]").map(function (e) {
        return { title: e.text(), input: absUrl(e.attr("href")), script: "source.js" };
    });

    return Response.success({
        name: title.text(),
        author: info.select("a[href^=tac-gia]").text(),
        cover: doc.select(".image-story img").attr("src"),
        description: doc.select("#tab-info-1 .s-content").html(),
        detail: details.join("<br>"),
        url: url,
        type: "novel",
        format: "novel",
        ongoing: info.text().indexOf("Đã hoàn thành") === -1,
        tags: tags
    });
}
