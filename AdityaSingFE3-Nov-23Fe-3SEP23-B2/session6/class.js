// function People(personName, personAge){
//   this.personAge = personAge;
//   this.personName = personName;
//   this.greet = function () {
//     console.log('Hello ' + this.personName)
//   }
// }

class People {
  constructor(personName, personAge) {
    this.personAge = personAge;
    this.personName = personName
  }
  greet() {
    console.log('Hello ' + this.personName)
  }
}

const keshav = new People('Keshav', 24)
console.log(keshav)

keshav.greet()