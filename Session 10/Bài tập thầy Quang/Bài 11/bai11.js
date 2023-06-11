let n = Number(prompt("Nhập vào 1 số: "));
let perfect = false;
let sum = 0;

for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    sum += i;
  }
}
if (n === sum) {
  perfect = true;
}

if (perfect) {
  console.log("Số bạn vừa nhập hoàn hảo");
} else {
  console.log("Số bạn vừa nhập không hoàn hảo");
}
