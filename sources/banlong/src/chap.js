load('config.js');
function execute(url) {
    url = normalizeUrl(url);
    let response = fetch(url);
    if (!response.ok) return Response.error("HTTP " + response.status);
    let doc = response.html();

    let root = doc.select("#chapter-content");
    if (!root.select(".content-lock").isEmpty()) {
        return Response.error("Bạn cần mua chương VIP này trên blhvip.vn để đọc.");
    }

    let content = root.select(".published-content").first();
    if (!content) return Response.error("Không tìm thấy nội dung chương");
    content.select("script, style, iframe, ins").remove();

    return Response.success(content.html(), root.select("h1.chapter-title").text());
}
