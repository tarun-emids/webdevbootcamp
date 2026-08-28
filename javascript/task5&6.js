//Shopping cart array

// create an empty shopping cart
let shoppingCart = [];

// add items to it
shoppingCart.push("Milk")
shoppingCart.push("Eggs")
shoppingCart.push("Oats")
shoppingCart.push("Chicken")
shoppingCart.push("IceCream")

// remove the last item
shoppingCart.pop()

// print all the items
console.log(shoppingCart)


// Library Object Management

// create a library object
// name and an empty book array
// method to addBook, borrowBook and returnBook
let library = {
    name: "My Book Shelf",
    book: [],


    addBook(title, author){
        const newBook = {
            title: title,
            author: author,
            available: true
        }
        this.book.push(newBook)
        console.log(`${newBook.title} added successfully`)
    },

    borrowBook(title){
        const book= this.book.find(b => b.title === title);
        
        if (!book) return "Book Not Found";
        if (!book.available) return "Book already borrowed"

        book.available = false;
        return`You borrowed ${title}`
    },

    returnBook(title){
        const book = this.book.find(b => b.title === title)

        if (!book) return "This book does not belong to us";
        if (book.available) return "This book was not borrowed"

        book.available = true
        return `${title} returned`
    },

    showAvailableBooks(){
        return this.book
        .filter(book => book.available)
        .map(book => `${book.title} by ${book.author}`)
    }
};

console.log(library.addBook("The Hobbit", "J.R.R Tolien"))
console.log(library.addBook("Song of fire and ice", "George R.R Martin"))
console.log(library.addBook("Harry Potter", "J.K Rowling"))

console.log(library.borrowBook("Song of fire and ice"))

console.log(library.showAvailableBooks())

console.log(library.returnBook("Song of fire and ice"))

console.log(library.showAvailableBooks())
