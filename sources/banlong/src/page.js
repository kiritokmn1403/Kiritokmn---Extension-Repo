load('config.js');
function execute(url) {
    url = normalizeUrl(url);
    let slug = storySlug(url);
    if (!slug) return Response.error("URL truyện không hợp lệ");

    let base = API_URL + "/v1/story/" + slug + "/chapter_list?new=0&page=";
    let response = fetch(base + "1");
    if (!response.ok) return Response.error("HTTP " + response.status);
    let json = response.json();
    if (!json || !json.success) return Response.error("Không tải được danh sách chương");

    let total = parseInt(json.total_page) || 1;
    let pages = [];
    for (let i = 1; i <= total; i++) {
        pages.push(base + i);
    }
    return Response.success(pages);
}
