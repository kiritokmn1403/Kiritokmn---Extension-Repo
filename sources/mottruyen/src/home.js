load('config.js');
function execute() {
  var t = [["Mới cập nhật", ""], ["Ngôn Tình", "ngon-tinh"], ["Cổ đại", "co-dai"], ["Hiện đại", "hien-dai"], ["Tiên Hiệp", "tien-hiep"], ["Huyền Huyễn", "huyen-huyen"], ["Đô Thị", "do-thi"], ["Trọng Sinh", "trong-sinh"], ["Đam Mỹ", "dam-my"]];
  return Response.success(t.map(function (x) { return { title: x[0], input: x[1], script: "browse.js" }; }));
}
