// Extract the id value from the below string using js

let urlString = "https://phegon.com/course?id=12332"

let splitResult = urlString.split("id=");
let courseId = splitResult[1]
console.log(courseId)

//Password Validation function

function validatePassword(password){
    const isLongEnough = password.length> 6;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return isLongEnough && hasLetter && hasNumber;
}

let password = "Change123"
validatePassword(password)