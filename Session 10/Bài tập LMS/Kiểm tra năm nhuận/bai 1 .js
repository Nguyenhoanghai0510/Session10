let a = Number(prompt("Nhập vào một năm: "));
if ((a % 4 == 0 && a % 100 != 0) || a % 400 ==0 ){
    document.write("Năm này là năm nhuận");
} else {
    document.write("Năm này không phải là năm nhuận");
}