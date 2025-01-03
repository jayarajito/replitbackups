class Employee{
  constructor(name, department){
    this.name = name
    this.department = department
  }
  markPresent(){
    console.log(`${this.name} is present.`)
  }
  getRole(){
    console.log("Employee of Office")
  }
}

class Developer extends Employee {
  constructor(name, department, prefLanguage){
    super(name, department)
    this.prefLanguage = prefLanguage
  }
  submitCode() {
    console.log(`Code submitted by ${this.name} from ${this.department}`)
  }
  getRole(){
    super.getRole()
    console.log(`Works with ${this.prefLanguage}`)
  }
}

const virat = new Employee('virat', 'hr')
virat.markPresent()
virat.getRole()

const krishna = new Developer('krishna', 'fe', 'rust')
krishna.markPresent()
krishna.submitCode()
krishna.getRole()