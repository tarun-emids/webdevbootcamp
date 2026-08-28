// creating and array

let emptyArray = [];

// string array

let fruits =["Apple", "Banana", "Mango"]

// mixed array

let mixedArray = [1, "Hello", true, null]

// access items in array

fruits.forEach(fruit => console.log(fruit))

for (let fruit of fruits) {
    console.log(fruit)
} 

//indexing
// no negative indexing like python
console.log(fruits[fruits.length - 1])

//replacing
fruits[0]= "orange"
console.log(fruits)

// ARRAY METHODS

let colors= ["red", "green", "blue", "yellow"]
console.log("original colors: " + colors)

//add
colors.push("orange") //default adds to the end
console.log("new colors: "+ colors)

//remove
colors.pop() //default removes the last time
console.log("reduced colors: "+ colors)

//add to beginning
colors.unshift("purple")
console.log("added to the start: " + colors)

//remove the beginning
colors.shift();
console.log("removed from beginning: " + colors)

// join two arrays
let moreColors = ["cyan", "aqua", "biege"]
let allColors =colors.concat(moreColors)
console.log("All colors: " + allColors)

// slicing
let someColors = allColors.slice(1, 4)
console.log("sliced colors: " + someColors)

// get index
let blueIndex= allColors.indexOf("blue")
console.log("Index of blue: " + blueIndex)

// -1 for item which dont exist in the array