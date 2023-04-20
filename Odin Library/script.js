//The library 
let myLibrary = [];
//The book constructor 
class Book {
    constructor(author, title, numOfPages, readStatus) {
        this.author = author;
        this.title = title;
        this.numOfPages = numOfPages;
        this.readStatus = readStatus;
        this.toggleRead = function () {
            this.readStatus = !this.readStatus
        }
    }

}
//Book color generator
const bgColor = () => {
    let red = Math.round(Math.random(255) * 255);
    let green = Math.round(Math.random(255) * 255);
    let blue = Math.round(Math.random(255) * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
//Show form 
const showForm = () => {
    $("#form").css("display", "flex");

}
//Create new book
const createNewBook = () => {
    let book = new Book($("#author").val(), $("#title").val(), Number($("#numofpages").val()), document.querySelector('input[type="checkbox"]').checked);
    return book;
}
//Add book to library
const addBookToLibrary = (book) => {
    myLibrary.push(book)
    console.log(myLibrary)
}
//Render the book
const render = () => {
    let libraryEl = document.querySelector(".library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML =
            `
      <div class="book" style="background-color:${bgColor()}">
         <div class="card-header">
             <h3 class="title">${book.title}</h3>
             
         </div>
         <div class="body">
             <h5 class="author">Author: ${book.author}</h5>
             <p>Pages: ${book.numOfPages}</p>
             <p class="read-status">${book.readStatus ? "Read" : "Not Read"}</p>
             <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
             <button class="toggle-read" onclick="toggleRead(${i})">Toggle</button>
         </div>
         </div>
         `

        libraryEl.appendChild(bookEl);
    }
}
//Remove the book
const removeBook = (index) => {
    myLibrary.splice(index, 1);
    render();
    console.log(index)
    alert(`Removed book ${index}`)
}
//Toggle the read status
const toggleRead = (index) => {
    myLibrary[index].toggleRead();
    render();
}