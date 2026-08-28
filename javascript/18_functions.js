// function definition

function myName(){
    console.log("My name is Tarun")
}

function returnMyName(){
    return "Tarun"
}

// function calling

myName()
console.log(returnMyName())

// function expression approach

const expressMyName = function(){
    return "Hello Alice"
}

console.log(expressMyName)

// Arrow functions

const myNameArrow = () => {
    console.log("Arrow function")
}

myNameArrow()

// shorter arrow
// works when you have only one thing to return
const shortArrow = () => "Simplified return"
console.log(shortArrow())

