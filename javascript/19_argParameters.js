// arguements are the values that are passed to the functions

const greet = (name) => {
    return `Hello ${name}`
}

console.log(greet("Alice"))

// parameter is the placeholder, so in this case, "name" is a parameter
// arguement is the value being passed, in this case, "alice" is an arguement

const describePerson = (name, age, sex, occupation) => {
    return `Your name is ${name}, you are ${age} years old, you are ${sex} and your occupation is ${occupation}`
}

const description = describePerson("john", 22, "male", "developer");

console.log(description)

// default parameters
const describePersonDefault = (name, age, sex, occupation="Developer") => {
    return `Your name is ${name}, you are ${age} years old, you are ${sex} and your occupation is ${occupation}`
}

const descriptionDefault = describePersonDefault("john", 22, "male");

console.log(descriptionDefault) // Your name is john, you are 22 years old, you are male and your occupation is Developer
// Developer occupation was filled in even though it wasnt passed in as an arguement
// Default is overwritten if an arguement is provided
