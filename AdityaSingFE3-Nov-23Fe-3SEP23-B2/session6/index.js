const person = {
 name: "Alok Raj",
 age: 25,
 address: {
   city: "Bangalore",
   country: "India"
 },
 orders: [
   {
     name: 'iphone',
     price: '75k',
     features: [
       {
         name: 'dumb feature',
         description: 'very dumb feature'
       }
     ]
   }
 ],
 printFullName: function () { 
 	console.log("Alok Raj");
 },
 interests: ["Product Development", "Cinematography", "Mentoring"],
  1: "shivendra"
};

//dot notation
// console.log(person.name); //Alok Raj
// person.printFullName(); //Alok Raj
// console.log(person.address.city); //Bangalore
// console.log(person.address.country); //India

console.log(person.orders[0].features[0].name)
console.log(person.interests[2])
console.log(person.interests.at(-3))

person.canDrive = true
person.hobbies = ["asking questions", "answering questions"]
//console.log(person)

delete person["1"]
delete person.orders

console.log(person)

// function persondata(){
//   const person = { 
//     name: 'siraj',
//     occupation: 'IT'
//   }
//   return person
// }

// const personObj = personData()