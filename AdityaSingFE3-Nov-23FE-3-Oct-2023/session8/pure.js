//pure function

// 1. returns predictable output, output doesn't change even if you call it multiple times
// 2. no side effects (console.log, calling apis)

// f(x) = x + 5
// f(1) = 6
// f(4) = 9

// f(x) = sqrt(x)
// f(4) = +2 or -2

// f(x) = 1 - 1 + 1 - 1 + 1 .... n terms where n->infinity

// function generateRandomNumber(){
//   return Math.random()
// }


// function greet(){
//   console.log("hello") //this is impurity
//   return 5
// }

//impure
function greetings(name) {
  console.log("Hello, " + name);
}

function greetingsPure(name) {
  return "Hello, " + name;
}

//impure
function addProperty(obj, property, value) {
  obj[property] = value;
  return obj;
}

const person = {
  name: "virat"
}

// const person2 = addProperty(person, 'age', 34)
// console.log(person2)
// console.log(person)


//pure
function addPropertyPure(obj, property, value) {
  const objCopy = {...obj}
  objCopy[property] = value;
  return objCopy;
}

const person2 = addPropertyPure(person, 'age', 34)
console.log(person2)

const person3 = addPropertyPure(person, 'city', 'delhi')
console.log(person3)

console.log(person)