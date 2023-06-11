let a = Number(prompt("Nhập vào cạnh thứ nhất"));
let b = Number(prompt("Nhập vào cạnh thứ hai"));
let c = Number(prompt("Nhập vào cạnh thứ ba"));
if (a + b > c && a + c > b && c + b > a) {
  let checkCan = false;
  if (a == b || b == c || c == a) {
    checkCan = true;
  }
  let checkDeu = false;
  if (a == b && b == c) {
    checkDeu = true;
  }
  let checkVuong = false;
  if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    checkVuong = true;
  }
  if (checkDeu) {
    console.log("Đây là 3 cạnh của tam giác đều");
  } else {
    if (checkCan) {
      if (checkVuong) {
        console.log("Đây là 3 cạnh của tam giác vuông cân");
      } else {
        console.log("Đây là 3 cạnh của tam giác cân");
      }
    } else {
      if (checkVuong) {
        console.log("Đây là 3 cạnh của tam giác vuông");
      } else {
        console.log("Đây là 3 cạnh của tam giác bình thường");
      }
    }
  }
} else {
  console.log("Đây không phải là 3 cạnh của tam giác");
}
