// strings

let greeting = 'Hello'; // string
let myName = "Tarun"; // also a string

let str3 = new String("Hey"); // also a string, just a roundabout way of doing it

// Concatenation

let fullGreeting = greeting + myName
console.log(fullGreeting)

// template literals

let fullGreetingTemplate = `${greeting} + ${myName}! Today is a good day`;
console.log(fullGreetingTemplate) // here + counts as a string instead of a concatenation operator



// STRING MANIPULATION

let text = "Javascript is awesome"
console.log(text.length) // 21

// Accessing characters
console.log(text.charAt(0)) // J
console.log(text[0]) // J

// Changing cases
console.log(text.toUpperCase())
console.log(text.toLowerCase())

// Substring
const subStrResult = text.substring(0, 4)
console.log(subStrResult) // Java

const sliceResult = text.slice(0,4)
console.log(sliceResult) //Java

// Searching
console.log(text.indexOf("is")) //11
console.log(text.includes("awesome")) //true
console.log(text.startsWith("j")) //false, case sensitive
console.log(text.endsWith("awesome")) // true

// Replacing
const newText = text.replace("awesome", "amazing")
console.log(newText) // Javascript is amazing

// Splitting and Joining
let splitWords = text.split(" ");
console.log(splitWords) // ['Javascript', 'is', 'awesome']

const joinedWords = splitWords.join("-")
console.log(joinedWords) // Javascript-is-awesome

// Trimming

let spacedText = "       Hello             World"
console.log(spacedText) //        Hello             World
console.log(spacedText.trim()) //Hello             World
console.log(spacedText.trimStart()) //Hello             World
console.log(spacedText.trimEnd()) //       Hello             World


// Special Characters
console.log("First line \nsecond line \n3rd line")
console.log("hello my name is 'Bob'")
console.log("hello my name is \"Bob\"")


// == vs ===

const isEquals1 = "hello" === "hello";
const isEquals2 = "hello" == "hello";
console.log(isEquals1)
console.log(isEquals2)

// == and === are return same answer

const isEquals3 = "5" === 5
const isEquals4 = "5" == 5
console.log(isEquals3) // false
console.log(isEquals4) // true

// here we see === compares both the value and the datatype whereas == only compares the values



