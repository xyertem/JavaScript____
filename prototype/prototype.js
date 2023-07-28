
//console.log(this)

function Person(personInfo){
  this.personName     = personInfo.name
  this.personLastname = personInfo.lastname
  this.personAge      = personInfo.age
} 

/*function Person(){
  this.personName     = ''
  this.personLastname = ''
  this.personAge      = ''
} */

Person.prototype.fullname = function(){
  let fullname = this.personName + ' ' + this.personLastname
  console.log(fullname)
}

let personOne = new Person({
  name: "Yuksel",
  lastname: "Ertem",
  age: 27
})

function Employee(empInfo){
  Person.call(this , empInfo)
  this.empjob = empInfo.jobTitle
}

Employee.prototype = Object.create(Person.prototype)

Employee.prototype.jobTitle = function(){
  console.log(this.empjob)
}

let yuksel = new Employee({
  name: "Yuksel",
  lastname: "Ertem",
  age: 27,
  jobTitle: "Software Engineering"
})

Person.prototype.showAge = function(){
  console.log(this.personAge)
}

yuksel.fullname()
yuksel.jobTitle()
yuksel.showAge()

let defaultPerson = new Person()
console.log(defaultPerson)

module.exports = {
  Person,
  Employee
}
//console.log(yuksel.enpjob)
//personOne.fullname()