// change heading text
// javascript sees the entire HTML script as an object, this is called DOM
// wherever this js is linked to, i.e, the html, the document keyword captures
document.getElementById("main-heading").textContent = "Changed via JavaScript"

// gets all the elements that belong to that class
// '.' for classes and '#' for id
// querySelector for 1, querySelectorALl for all
const firstPara = document.querySelector(".text-paragraph");
firstPara.style.color = "red"
firstPara.style.fontSize = "30px"
firstPara.textContent = "(new para)"

const allPara = document.querySelectorAll("p");
// allPara.forEach(para => {
//     para.style.background = "aqua"
//     para.style.padding = "10px"
// })

//traditional method just cuz
for (let para of allPara){
    para.style.background = "aqua"
}

// add new paragraph

const newPara = document.createElement('h3')
newPara.textContent = "New heading added through JavaScript"
document.body.appendChild(newPara)