let scoreHtml = Number(prompt("Nhập điểm HTML: "));
let scoreCss = Number(prompt("Nhập điểm CSS: "));
let scoreJavascript = Number(prompt("Nhập điểm Javascript: "));
let average = (scoreHtml + scoreCss + scoreJavascript) / 3;
if (average < 5) {
  console.log("Xếp loại yếu");
} else if (average < 6) {
  console.log("Xếp loại kém");
} else if (average < 7) {
  console.log("Xếp loại trung bình");
} else if (average < 8) {
  console.log("Xếp loại khá");
} else if (average < 9) {
  console.log("Xếp loại giỏi");
} else {
  console.log("Xếp loại xuất sắc");
}
