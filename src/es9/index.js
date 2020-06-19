// desestructurar objetos
const obj = {
    'name': 'CrisHood',
    'age' : 26,
    'country': 'CO',
}

let { name, ...all} = obj
console.log(name, all)


// anidar objetos
const obj = {
    'name': 'CrisHood',
    'age' : 26,
    
}

const obj1 = {
    ...obj,
    'country': 'CO',
   
}


// finally() para avisar el final de una promesa
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Final de la promesa'))


const regexDATA = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDATA.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)