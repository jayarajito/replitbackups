class Employee {
  constructor(name, department){
    this.name = name
    this.department = department
  }

  //function overloading is not present in js (is there in langs like java, c++)
  // markPresent(){
  //   console.log(`Employee ${this.name} is present`)
  // }
  markPresent(greeting){
    console.log(`Employee ${this.name} is ${greeting} present`)
  }
  getRole(){
    console.log('employee of the office')
  }
}

class Developer extends Employee {
  constructor(name, favLanguage, department){
    super(name, department) //mandatory
    this.favLanguage = favLanguage
  }
  markPresent(){ 
    super.markPresent()
    console.log(`Developer ${this.name} is present`)
  }
  submitCode(){
    console.log(`Code submitted by ${this.name} from ${this.department} in ${this.favLanguage}`)
  }
  getRole(){
     super.getRole()
     console.log(`works with ${this.prefLanguage}`)
  }
}

const aditya = new Employee('aditya', 'sales')
const syed = new Developer('syed', 'terraform', 'sre')

aditya.markPresent()
aditya.getRole()
syed.markPresent()
syed.submitCode()
syed.getRole()

// const aman = new Employee('aman', 'hr')
// aman.markPresent()