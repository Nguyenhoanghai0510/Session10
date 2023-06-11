let n = Number(prompt("Nhập 1 số nguyên: "));
let total = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    total += i;
    console.log("n là : " + i + " total :" + total);
  }
}
