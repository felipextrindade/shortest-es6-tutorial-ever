// Creating a variable
let a = 2

// Creating a constant
const b = 1

// Creating an Array
let myArray = [2, 3, 4, 5, 6]
console.log(myArray)
console.log(myArray[0])

// Adding to an array
myArray.push(4)
console.log(myArray)


// Creating a Map (Dictionary)
var myMap = new Map();
myMap.set('First Key', 42)
myMap.set(myArray, 'Using an array as key')
myMap.set(myFunction, 'Using function as key')

console.log(myMap.get('First Key'))
console.log(myMap.get(myArray))
console.log(myMap.get(myFunction))

// Creating and accessing an object
let myObject = {
    name: 'Felipe',
    age: 20
}

console.log(myObject)
console.log(myObject.name)

// Creating functions - which can receive anything as parameters
function myFunction() {
    console.log('This is my first function')
}

myFunction()

// Creating an arrow function
const myArrowFunction = () => {
    console.log("This is my first arrow function")
}

myArrowFunction()

// Creating a returning function, with default parameters
function returnSum(x = 2, y = 1) {
    return x + y
}

// Below, only X is passed as a parameter. Y is 1 - cause we defined it as default.
const sum = returnSum(3)
console.log('Sum result: ' + sum)

// For loop
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

// We can also use an for each - which also applies to the Map type
myArray.forEach((element) => {
    console.log("Printing using for each: " + element)
})

/*
  This is
  
  A multi-line
  
  Comment
*/

// We can do string interpolation using ´${element}´
console.log(`This is a string interpolation example. This is my array: ${myArray}`)

// Destructuring an object - getting an specific value of it
const { name } = myObject
console.log(`This is my name: ${name}`)

// This is a promise - a function that is executed asynchronously
const timeout = Math.random() * 2000 + 1000
const testPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                // Resolving the promise (then)
                // It could be a catch (catch)
                resolve(`This is my promise result! After ${timeout} milliseconds`)
            }, timeout);
    });

testPromise.then(result => {
    console.log(result)
})

console.log("This line will be printed first - cause the promise is still running")

// Creating classes
class myClass {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    printName() {
        console.log(this.name)
    }
}

let myInstance = new myClass(1, 'Class for Felipe')
myInstance.printName()

// Using spread - passing a collection as many arguments
let sweets = ['cakes', 'candy', 'lollipop']
let bakery = ['bread', 'butter', ...sweets, 'sandwich']

console.log(`A bakery has: ${bakery}`)

