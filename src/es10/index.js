// Aplanar arreglo por niveles
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]

console.log(array.flat(2))

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2]))


let hello = '     Hi Wow'

console.log(hello)
console.log(hello.trimStart())

let hello = 'hello WoW        '
console.log(hello)
console.log(hello.trimEnd())

// convertir arreglos a objetos

let entries = [['name', 'CrisHood'] , ['age', 26]]

console.log(Object.fromEntries(entries))


// objeto tipo simbolo

let mySymbol = 'My symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)