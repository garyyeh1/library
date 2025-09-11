let myLibrary = [];

function Book (title, author, pages){
    this.id = Date.now()
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}. ID: ${this.id}`
}

// const book1 = new Book('Hobbit', 'john', '300','yes')
// const book2 = new Book('Sobbit', 'bohn', '303','yes')
// const book3 = new Book('snb', 'fdf', '123','no')

// myLibrary.push(book1, book2,book3)

//accepting input
let input1 = document.getElementById("submit").addEventListener("click", addBook);
function addBook(){
    let title1 = document.getElementById("title").value;
    let author1 = document.getElementById("author").value;
    let pages1 = document.getElementById("pages").value;
    let bookss = new Book(title1, author1, pages1)
    
    myLibrary.push(bookss)
    let bookData = Object.entries(myLibrary.at(-1)); // converts object into 2D array
    console.table(myLibrary)
    console.table(bookData)
    renderBook()
}

//displaying the library
function renderBook(){
    let displaybooks = document.querySelector("#displaybooks")
    let bookData = Object.entries(myLibrary.at(-1)); // converts object into 2D array
    let uniqueID = bookData[0][1]
 
    let items = document.createElement('div')
    items.setAttribute('id', uniqueID)

    for (let j = 1; j< bookData.length;j++){
        const line = document.createElement('p')
        line.textContent = `${bookData[j][0]}: ${bookData[j][1]}`
        items.append(line)
    }

    let removeButton = document.createElement('button')
    removeButton.textContent = 'Remove Book'
    removeButton.setAttribute('id', uniqueID)
    removeButton.addEventListener('click', removeBook);


    items.append(removeButton)

    displaybooks.append(items)
    console.log(items.id, String(uniqueID))

    function removeBook(){
        stringid= String(uniqueID)
        myLibrary = myLibrary.filter(items => items.id !== stringid);


        // Object.fromEntries(
        //     Object.entries(romNumbers).filter(([key, value]) => value === 5) )

        myLibrary = myLibrary.filter(myLibrary => myLibrary.id !== uniqueID);
        
        console.table(myLibrary)
        items.remove()  
    }

}



// let remove1 = document.getElementById("remove").addEventListener("click", removeBook);

