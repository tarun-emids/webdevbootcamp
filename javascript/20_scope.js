//global vs local

let globalScope= "Im global"

const showScope = () => {
    let localScope = "Im local";
    console.log(globalScope)
    console.log(localScope)
} 

showScope()

// console.log(localScope) throws an error since it exists only within the function
// whereas global scope can be accessed all over, even within a function

