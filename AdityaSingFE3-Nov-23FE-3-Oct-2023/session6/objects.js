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
 interests: ["Product Development", "Cinematography", "Mentoring"],
  "full name": "alok raj"
};

console.log(person.name); //Alok Raj
person.printFullName(); //Alok Raj
console.log(person.address.city); //Bangalore
console.log(person.address.country); //India

person.greet('namaste')
console.log(person.interests[1])

person.age = 25
delete person.interests

console.log(person.interests)
console.log(person["full name"])

const property = "address"
console.log(person[property])

// for (let key in person) {
//   console.log(person[key])
// }