let number1 = Number(prompt("Nhập vào số thứ nhất: "));
let number2 = Number(prompt("Nhập vào số thứ hai: "));
let calculation = prompt("Nhập vào phép tính");
let result = 0;
debugger;
switch (calculation) {
  case "+":
    result = number1 + number2;
    break;

  case "-":
    result = number1 - number2;
    break;

  case "*":
    result = number1 * number2;
    break;

  case "/":
    result = number1 / number2;
    break;

  case "%":
    result = number1 % number2;
    break;

  default:
    console.log("Phép tính bạn vừa nhập không hợp lệ");
}
console.log("Kết quả:" + result);
