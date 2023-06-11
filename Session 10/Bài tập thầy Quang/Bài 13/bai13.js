let total;
total = 0;
do {
  let number = parseInt(prompt("Nhập vào 1 số: "));
  if (number > 0) {
    total += number;
  } else {
    break;
  }
} while (true);
console.log(total);