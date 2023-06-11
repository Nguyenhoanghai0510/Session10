let weight = Number(prompt("Enter your weight"));
let height = Number(prompt("Enter your height"));
let bmi = weight /Math.pow(height,2);
if (bmi < 18) {
    document.write("Underweight");
} else if (bmi < 25) {
    document.write("Normal");
} else if (bmi < 30) {
    document.write("Overweight");
} else {
    document.write("Obese");
}