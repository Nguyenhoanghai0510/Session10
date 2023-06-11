let number1 = Number(prompt("Nhập vào số thứ nhất: "));
let number2 = Number(prompt("Nhập vào số thứ hai: "));
let number3 = Number(prompt("Nhập vào số thứ ba: "));
let min = number1;
if (min > number2) {
  min = number2;
}
if (min > number3) {
  min = number3;
}
console.log("Số nhỏ nhât là", min);
let max = number1;
if (max < number2) {
  max = number2;
}
if (max < number3) {
  max = number3;
}
console.log("Số lớn nhât là", max);