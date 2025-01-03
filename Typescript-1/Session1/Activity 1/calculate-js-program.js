//Function to perform basic arithmetic operations
function calculate(num1, num2, operation) {
    if (operation == "add")
        return num1 + num2;
    if (operation == "subtract")
        return num2 - num1;
}

var num1 = 10;
var num2 = 2;

var sum = calculate(num1, num2, "add");
var diff = calculate(num1, "subtract", num2);

console.log("Sum ", sum);
console.log("Difference ", diff);
