load('config.js');
function execute() {
  return Response.success([
    { title: "Mới cập nhật", input: "latest", script: "browse.js" },
    { title: "Xem nhiều", input: "views", script: "browse.js" }
  ]);
}
