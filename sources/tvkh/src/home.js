load('config.js');
load('lib_common.js');
load('lib_madara.js');
function execute() { return Response.success([{ title: "Mới cập nhật", input: "latest", script: "browse.js" }, { title: "Xem nhiều", input: "views", script: "browse.js" }, { title: "Đánh giá cao", input: "rating", script: "browse.js" }, { title: "Truyện mới", input: "new-manga", script: "browse.js" }]); }
