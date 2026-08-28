// use pascal cases for classes
class Calculator{

    add(a, b){
        return a + b
    }

    subtract(a, b){
        return a - b
    }

}

const calcObject = new Calculator();

const sum = calcObject.add(5, 3)
console.log(sum)

const diff = calcObject.subtract(100, 67)
console.log(diff)


class Book{
    constructor(title, author){
        this.title = title
        this.author =  author
        this.available = true
    }

    borrow() {
        if(this.available){
            this.available = false;
            return `You have borrowed ${this.title}`
        }
    }

    returnBook(){
        this.available = true
        return `Thanks for returning ${this.title}`
    }
}

const bookObject = new Book("Game of Thrones", "George R.R Martin");
console.log(bookObject.borrow("Game of Thrones"))

// INHERITANCE example

class Ebook extends Book {
    constructor(title, author, filesize){
        super(title, author) // pass the parameters to the parent class constructor
        this.filesize = filesize + " MB"
    }

    download(){
        return `Downloading ${this.title} (${this.filesize})...`
    }
}

const eBookObject = new Ebook("Dairy of a wimpy kid","Greg Heffley", 15);;
console.log(eBookObject.borrow())
console.log(eBookObject.download())

// ebook has both methods from its parent Book aswell as its own methods due to inheritence