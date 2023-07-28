const { Person, Employee } = require('./prototype');


// const Omer = new Person({
//   name:
// })
Employee.prototype.setUserId = function(){
  let userId = Math.random(10)
  this.userId = userId
  console.log(this.personName  + ' and userID ' + this.userId)  
}

const newEmployee = new Employee({
  name: 'Yuksel',
  lastname: 'Ertem',
  age: 27,
  jobTitle: 'Software engineeing'
})

newEmployee.setUserId()