let n = Number(prompt("Nhập vào số nguyên n"));
if (n < 2) {
  console.log("Số này không phải là số nguyên tố");
} else {
  for (let index = 2; index < n; index++) {
    let checkPrime = true;

    for (let i = 2; i <= Math.sqrt(index); i++) {
      if (index % i == 0) {
        checkPrime = false;
        break;
      }
    }
    if (checkPrime) {
      console.log("Các số nguyên tố là:", index);
    }
  }
}
