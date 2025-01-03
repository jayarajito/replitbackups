function Circle(radius, location){
  this.radius = radius
  // this.location = {
  //   x: location.x,
  //   y: location.y
  // }
  this.location = {...location}
  this.draw = () => console.log(this.location)
  this.move = (nextX, nextY) => {
    this.location = {
      x: nextX,
      y: nextY
    }
  }
}

// PascalCase or TitleCase
// camelCase
// snake_case
// kebab-case

// aditya-singh

const circle1 = new Circle(5, {x: 0, y: 0})

for(let i=0; i<=10; i++){
  circle1.move(i,i)
  circle1.draw()
}