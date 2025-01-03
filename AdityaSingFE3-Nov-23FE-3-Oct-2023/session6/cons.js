function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // this.accelerate = function (){
  //   console.log("accelerate")
  // }
  this.brake = function (typeOfBreak){
    console.log(typeOfBreak, "brake")
  }
}

//this refers to the current object

const car1 = new Car('honda', 'city', 2000)
console.log(car1.year)
car1.brake("hydraulic")

const car2 = new Car('toyota', 'fortuner', 2010)
console.log(car2.model)
// car2.accelerate()

// PascalCase 
// camelCase
// kebab-case
// snake_case

// function Footballer(){
//   this.positon = "striker",
//   this.club = "Real Madrid"
// }

// const jude = new Footballer()
// console.log(jude)