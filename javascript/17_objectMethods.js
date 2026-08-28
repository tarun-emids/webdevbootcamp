const smartphone = {
    brand: "Apple",
    model: "iPhone 17",
    color: "black",
    batteryLevel: 85,
    
    makeCall: function(number) {
        console.log(`Calling ${number}`)
    },

    takePhoto(){
        console.log("CLICK photo captured")
    },

    checkBattery(){
        console.log(`Current battery: ${this.batteryLevel} %`)
    },

    describe(){
        return `My phone brand is ${this.brand}, the model is ${this.model} and the color is ${this.color}`
    }
}

smartphone.makeCall("123-456-789")
smartphone.takePhoto()
smartphone.checkBattery()
const description = smartphone.describe()
console.log(description)