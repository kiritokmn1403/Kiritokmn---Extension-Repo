load('config.js');
function execute() {
    let response = fetch(BASE_URL);
    if (!response.ok) return Response.error("HTTP " + response.status);
    let doc = response.html();

    let genres = doc.select(".modal-story-genre li a").map(function (e) {
        return { title: e.text(), input: absUrl(e.attr("href")), script: "source.js" };
    });
    return Response.success(genres);
}
