function Circle(radius, location){
  this.radius = radius
  // this.location = {
  //   x: location.x,
  //   y: location.y
  // }
  this.location = {...location}
  this.draw = function(){
    console.log(this.location)
  }
  this.move = function(nextX, nextY){
    this.location = {
      x: nextX,
      y: nextY
    }
  }
}

const initialLocation = {x: 0, y: 0}

// const circle1 = new Circle(5, initialLocation)
// console.log(circle1)

// //circle1.draw()

// for(let i=0; i<=10; i++){
//   circle1.move(i,i)
//   circle1.draw()
// }

