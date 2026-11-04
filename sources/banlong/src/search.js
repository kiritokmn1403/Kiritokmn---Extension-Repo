load('config.js');
function execute(query, page) {
    query = query || "";
    page = page || "1";

    let response = fetch(API_URL + "/v1/search", {
        queries: { q: query, page: page }
    });
    if (!response.ok) return Response.error("HTTP " + response.status);
    let json = response.json();
    if (!json || !json.success) return Response.error(json && json.error_message ? json.error_message : "Không tìm được truyện");

    let items = [];
    (json.data || []).forEach(function (e) {
        items.push({
            name: e.name,
            link: BASE_URL + "/truyen/" + e.slug,
            cover: e.img_url,
            description: e.author_name + " - " + e.chapter_count + " chương",
            tag: e.is_full ? "Full" : e.category_name
        });
    });

    let current = parseInt(page) || 1;
    let total = parseInt(json.total_page) || 0;
    return Response.success(items, current < total ? String(current + 1) : "");
}
