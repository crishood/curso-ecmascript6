// default params
function newFunction (name, age, country) {
    var name = name || 'CrisHood'
    var age = age || 26
    var country = country || 'CO'
    console.log(name, age, country)
}

// es6
function newFunction2 (name = 'CrisHood', age = '26', country = 'CO'){
    console.log(name, age, country)
}

newFunction2()
newFunction2('Leia', '33', 'CO')

// concatenación
let hello = 'Hello'
let wow = 'Wow'
let epicPhrase = hello + ' ' + wow
console.log (epicPhrase)

// es6
let epicPhrase2 = `${hello} ${wow}`
console.log (epicPhrase2)

// multilínea
let lorem = 'Esta es una frase legendaria que puedo separar en dos pedazos. CrisHood gana Grammys\n' + 'Y billboards porque es un crack.'
console.log(lorem)

// es6
let lorem2 = `Otras frase legendaria
separada en un otra linea.`
console.log(lorem2)

// desestructuración
let person = {
    'name': 'CrisHood',
    'age' : 26,
    'country': 'CO'
}

console.log(person.name, person.age)

// es6
let { name, age, country } = person
console.log(name, age, country)

// spread operator
let team1 = ['CrisHood' , 'Tainy' , 'Sky']
let team2 = ['Musi', 'Dj Nelson', 'Luny']

let elite = ['Urba' , ...team1, ...team2]

console.log(elite)

// let y const

{
    var globalVar = 'Global'
}

{
    var globalLet = 'Global Let'
}

console.log(globalVar)
console.log(globalLet)

const a = 'b'

// creando objetos

let name = 'CrisHood'
let age = 26
obj = {name: name, age: age}

// es6

obj2 = { name, age }

// arrow functions

const names = [
    {name: 'CrisHood', age: 26},
    {name: 'Maria', age: 19}
]

let listOfNames = names.map(function (item) {
    console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age, country) => {
    
}

const listOfNames4 = name => {

}

const square = num => num * num

// promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('C o o l')
        } else {
            reject ('O u c h')
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(reject))

// clases

class calculator {
    constructor() {
       this.valueA = 0
       this.valueB = 0 
    }
    sum (valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator()
console.log(calc.sum(2, 2))

// modulos

import hello from './module'

hello()

// generators

function* helloWow () {
    if (true) {
        yield 'W o W'
    }

    if (true) {
        yield 'W o W'
    }
}

const generatorHello = helloWow()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)