let amount = Number(prompt("Nhập vào số tiền gửi ngân hàng: "));
let rate = Number(prompt("Nhập vào lãi suất năm: "));
let month = Number(prompt("Nhập vào số tháng gửi: "));

let rateMonth = rate / 12;

let interest = 0;

for (let i = 1; i <= month; i++) {
  let interestMonth = (rateMonth * amount) / 100;

  amount += interestMonth;

  interest += interestMonth;
}

console.log("Tiền nhận sau khi kết thúc gửi là:" + amount);
console.log("Tiền lãi nhận sau khi kết thúc gửi là:" + interest);
