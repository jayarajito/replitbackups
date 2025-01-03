const add = (x, y) => {
  return x + y;
};

const diff = (x, y) => {
  return Math.abs(x - y);
};

const multiply = (x, y) => {
  return x * y;
};

//Higher order function taking function as arg.
const calculate = (callback, x, y) => {
  const value = callback(x, y);
  return value;
};

console.log(calculate(add, 4, 5)); //9
console.log(calculate(diff, 4, 5)); //1
console.log(calculate(multiply, 4, 5)); //20