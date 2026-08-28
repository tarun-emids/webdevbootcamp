// creating an object
let person = {
    name:"Tarun",
    age: 22,
    isStudent: false
}

const myName = person.name;

console.log(myName)


// iterate over an object

for (let key in person) {
    console.log(key)
}

let keys = Object.keys(person)
console.log(keys)

let values = Object.values(person)
console.log(values)

let keysAndValues = Object.entries(person)
console.log(keysAndValues)

// add new property

person.job = "Developer";
console.log(Object.entries(person)) // added new key value pair of job

// modify
person.age = 21
console.log(person.age)

// remove property
delete person.isStudent
console.log(person)