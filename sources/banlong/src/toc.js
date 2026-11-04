load('config.js');
function execute(url) {
    let path = /\/v1\/story\/.+$/.exec(url);
    let apiUrl = path ? API_URL + path[0] : API_URL + "/v1/story/" + storySlug(url) + "/chapter_list?new=0&page=1";

    let response = fetch(apiUrl);
    if (!response.ok) return Response.error("HTTP " + response.status);
    let json = response.json();
    if (!json || !json.success) return Response.error("Không tải được danh sách chương");

    let chapters = [];
    (json.data || []).forEach(function (e) {
        chapters.push({
            name: e.name,
            url: absUrl(e.url),
            lock: false,
            pay: e.is_vip ? true : false
        });
    });
    return Response.success(chapters);
}
