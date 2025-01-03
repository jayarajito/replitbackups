//ES6 modules
//import/export

//named import
import Student, {add, subtract, multiply, divide} from "./functions.js"
//import Student from "./functions.js"

const person = {
  firstName: "ankit",
  age: 24
}

const {firstName, age} = person

console.log(add(5,10))

const dilip = new Student('dilip')
dilip.markPresent()