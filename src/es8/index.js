// crear matrices con objetos
const data = {
    producer: 'CrisHood',
    singer: 'J Quiles',
    songwriter: 'Bull Nene',
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


// crear arreglos con los elementos de los objetos
const data = {
    producer: 'CrisHood',
    singer: 'De la Ghetto',
    songwriter: 'Feid', 
}

const values = Object.values(data)
console.log(values)

// pads

const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '--------'))

// async - await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    }catch (error) {
        console.log(error)
    }
}

anotherFunction()