const myLibrary = [];


function Book (title, author, pages, read){
    this.id = Date.now()
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}. ID: ${this.id}`
}

const book1 = new Book('Hobbit', 'john', '300','yes')
const book2 = new Book('Sobbit', 'bohn', '303','yes')
const book3 = new Book('snb', 'fdf', '123','no')

myLibrary.push(book1, book2,book3)

let displaybooks = document.querySelector("#displaybooks")
for (let i = 0; i < myLibrary.length; i++){
    const bookData = Object.entries(myLibrary[i]); // converts object into 2D array
    const items = document.createElement('div')
    items.setAttribute('id', myLibrary[i].id)
    for (let j = 1; j< bookData.length;j++){
        const line = document.createElement('p')
        line.textContent = `${bookData[j][0]}: ${bookData[j][1]}`
        items.append(line)
    }
    displaybooks.append(items)
    // console.log(items)
}

