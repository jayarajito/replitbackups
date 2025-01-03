const person = {
 name: "Alok Raj",
 address: {
   city: "Bangalore",
   country: "India"
 },
 greet: function(greeting) {
    console.log(greeting)
  },
 printFullName: function () { 
  console.log("Alok Raj");
 },
 interests: ["Product Development", "Cinematography", "Mentoring"]
};

// const obj = new Object()
// obj.firstName = "cristiano"
// console.log(obj)

console.log(Object.keys(person)) //array of all keys
console.log(Object.values(person)) //array of all values
console.log(Object.entries(person)) //array of arrays where every subarray will have 2 elements [key, value]

const student = Object.assign({grade: 'A'}, person)
console.log(student)

const existingObj = {class: '10'}
const student2 = Object.assign(existingObj, person)
console.log(student2)