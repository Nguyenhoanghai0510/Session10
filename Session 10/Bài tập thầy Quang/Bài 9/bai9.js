let n = Number(prompt("Nhập vào 1 số: "));
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    console.log("Ước số của n là : " + i);
  }
}
