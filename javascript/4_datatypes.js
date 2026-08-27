// PRIMITIVE DATATYPES

let age = 25; // number

let firstName = "Tarun"; //string

let bigNumber = 123456789; //bigint

let isStudent = true; //boolean

let notAssigned; //undefined

let id_1 = Symbol("2"); // symbol creates unique variables, even if their values are same, they arent equal
let id_2 = Symbol("2");
console.log(id_1== id_2); // returns false

let nothing = null; //null

// NON PRIMITIVE DATATYPES

let person = {_name : "Bob", age: "22", race: "asian"} //object
let colors = ["red", "blue", "green"] // arrays
// function
function sayHi(){
    console.log("Hi All")
}

// check datatypes using

console.log(typeof id)
