//constructor without parameters
// function MahindraThar(){
//   this.brand = 'Mahindra'
//   this.name = 'thar'
//   this.start = () => {
//     console.log('starting')
//   }
//   this.accelerate = () => {
//     console.log('accerate')
//   }
// }

// const thar1 = new MahindraThar()
// const thar2 = new MahindraThar()
// const thar3 = new MahindraThar()
// const thar4 = new MahindraThar()
// console.log(thar1, thar2, thar3, thar4)

function Car(manufacturer, modelName, bodyColor) {
  this.make = manufacturer
  this.model = modelName
  this.color = bodyColor
  this.start = () => {
    console.log('start')
  }
  this.brake = () => {
    console.log('brake')
  }
  this.accelerate = () => {
    console.log('accelerate')
  }
}

const car1 = new Car('audi', 'Q7', 'black')

car1.selfDriving = function() {
  console.log('self driving')
}

const car2 = new Car('mercedes', 'E-class', 'white')

console.log(car1)
console.log(car2)