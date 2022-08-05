//console.log(this);

class Person {
  _firstname;
  _lastname;
  _age;

  constructor(firstname,lastname,age){
    this._firstname = firstname
    this._lastname = lastname
    this._age = age
  }
  get Age(){
    return this._age
  }
  set Age(value){
      if(typeof value === 'number'){
        this._age = value
      }else
        console.log('Invalid paramater')

  }
}

Person.prototype.display = function(){
  console.log(this)
}

let newPerson = new Person('Yuksel','Ertem',27)

newPerson.display()

function talk(){
  console.log(`${this._firstname} is talking`)
}

talk.bind(Person)()


