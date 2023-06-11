//a. In ra các số từ 0 đến -20 trên màn hình console
for (let i = 0; i >= -20; i--) {
  console.log("a: " + i);
}

//b. In ra các số lẻ tử 3 đến -29

for (let i = 3; i >= -29; i--) {
  if (i % 2 != 0) {
    console.log("b: " + i);
  }
}

//c. In ra các số chẵn từ 12 đến -14

for (let i = 12; i >= -14; i--) {
  if (i % 2 == 0) {
    console.log("c: " + i);
  }
}

//d. In ra các số là bội của 3 từ 50 đến 20
for (let i = 50; i >= 20; i--) {
  if (i % 3 == 0) {
    console.log("d : " + i);
  }
}
