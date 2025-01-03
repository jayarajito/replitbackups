//Function to perform basic arithmetic operations
function calculate(num1: number, num2: number, operation: string) {
  if (operation == "add") return num1 + num2;
  if (operation == "subtract") return num2 - num1;
}

let num1 = 10;
let num2 = 2;

let sum = calculate(num1, num2, "add");
let diff = calculate(num1, "subtract", num2);

console.log("Sum ", sum);
console.log("Difference ", diff);
