class Util {
  constructor(data){
    this.data = {...data} //copy
  }
  sumSalaries = () => Object.values(this.data).reduce((acc, cv) => acc += cv, 0)
  averageSalaries = () => this.sumSalaries()/Object.values(this.data).length
  findSalaryRange = () => Math.max(...Object.values(this.data)) - Math.min(...Object.values(this.data))
}

const employeeData = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const company = new Util(employeeData)
console.log(company.sumSalaries())
console.log(company.averageSalaries())
console.log(company.findSalaryRange())