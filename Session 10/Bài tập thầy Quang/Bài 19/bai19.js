let n = Number(prompt("Nhập vào 1 số có 3 chữ số"));
let armstrong =
  Math.pow(Math.floor(n / 100), 3) +
  Math.pow(Math.floor((n % 100) / 10), 3) +
  Math.pow(n % 10, 3);
if (armstrong == n) {
  console.log("Đây là số armstrong");
} else {
  console.log("Đây không phải là số armstrong");
}
