const transformer = {
     sName: "Bumble bee",
     sType: "Otobot",
     
     fullname: function() { return `${this.sName} is ${this.sType}`},
     
     set _Name(value){
        if(typeof value === 'string'){
            this.sName = value
        }
     },
     set _Type(value){
        if(typeof value === 'string'){
            this.sType = value
        }
     }
}

var veichleType = function(sVname) {
    console.log(this.fullname() +  ` and choose to be turn an ${sVname}`)
} 
transformer._Name = 'Optimus prime'
transformer._Type = 'Otobot'

let vt = veichleType.bind(transformer)
// veichleType.apply(transformer,['camaro'])
// veichleType.call(transformer,'camaro')
// transformer.sName = 'Bumble bee'
// transformer.sType = 'Otobot'
// console.log(transformer.fullname())
// transformer.fullname()
// veichleType('camoro')
vt('camaro')
var Dur = 'Dur'