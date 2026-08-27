// Calculate the Area of a Circle of radius 5

function areaOfCircle(radius){
    let area = Math.PI * Math.pow(radius, 2)
    console.log(area)
}

let radius = 5
areaOfCircle(radius)

// Convert 112 Fahrenheit to Celsius

function convertToCelsius(fahrenheitTemp){
    let celsiusTemp = (fahrenheitTemp - 32) * (5/9)
    console.log(celsiusTemp)
}

let fahrenheitTemp = 112
convertToCelsius(fahrenheitTemp)