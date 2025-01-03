// f(x) = x^2 + 2x + 1
// f(2) = 4 + 4 + 1 = 9

// f(x) = x - x + x - x + x ...
// f(1) = 

//pure function
//1. always return a predictable output
//2. for same inputs, same output
//3. no side effects (anything that you do that does not help you in returning the value, stepping outside the function boundary)
//4. 

//pure
function addTwo(a, b) {
  return a + b;
}

// console.log(addTwo(5,10))
// console.log(addTwo(5,10))
// console.log(addTwo(5,10))

//impure
function generateRandom(){
  return Math.random()
}
//impure function
function addTwo(a, b) {
  console.log(a + b);
}

//impure function
function addProperty(obj, property, value) {
  obj[property] = value;
  return obj;
}

const person = {
  firstName: 'anshul'
}

// console.log(addProperty(person, 'lastName', 'bhaduria'))
// console.log(addProperty(person, 'age', 25))

//pure function
function addPropertyPure(obj, property, value) {
  const objCopy = {...obj}
  objCopy[property] = value;
  return objCopy;
}

console.log(addPropertyPure(person, 'lastName', 'bhaduria'))
console.log(addPropertyPure(person, 'age', 25))