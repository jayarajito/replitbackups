class Util{
  constructor(employeeData){
    this.data = employeeData
  }
  sumSalaries = () => Object.values(this.data).reduce((acc, cv) => acc+=cv, 0)
  avgSalaries = () => this.sumSalaries()/Object.values(this.data).length
  findSalaryRange = () => Math.max(...Object.values(this.data)) - Math.min(...Object.values(this.data))
}

const employeeData = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const company = new Util(employeeData)
console.log(company.sumSalaries())
console.log(company.avgSalaries())
console.log(company.findSalaryRange())