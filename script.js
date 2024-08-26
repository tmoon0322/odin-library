const myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.index = myLibrary.indexOf(this)
    }
}

Book.prototype.read = 'yes'

function addBookToLibrary() {

}


function displayBooks() {
    const table = document.querySelector('table');
    for (book of myLibrary) {
        const newRow = document.createElement('tr');
        const titleEntry = document.createElement('td');
        titleEntry.textContent = book.title;
        newRow.appendChild(titleEntry);
        const authorEntry = document.createElement('td');
        authorEntry.textContent = book.author;
        newRow.appendChild(authorEntry);
        const pagesEntry = document.createElement('td');
        pagesEntry.textContent = book.pages;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        const hasRead = document.createElement('td');
        hasRead.textContent = book.read
        const toggleRead = document.createElement('button');
        toggleRead.textContent = 'Toggle Read';
        newRow.appendChild(pagesEntry);
        newRow.appendChild(hasRead);
        newRow.appendChild(toggleRead);
        newRow.appendChild(deleteButton);
        table.appendChild(newRow);
        deleteButton.addEventListener('click', () => {
            table.removeChild(newRow);
            myLibrary.splice(book.index, 1);
        });
        toggleRead.addEventListener('click', () => {
            if (book.read == 'yes') {
                book.read = 'no'
            } else {
                book.read = 'yes'
            }
            hasRead.textContent = book.read
        });
    }
}


const book1 = new Book('Lord of the Rings', "Tolkien", 800);
const book2 = new Book('Harry Potter', 'Rowling', 400);

myLibrary.push(book1, book2)
displayBooks()

const dialog = document.querySelector("dialog");
const showButton = document.querySelector('#new_book');
const submitButton = document.querySelector("form button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});


submitButton.addEventListener("click", submitClick, false);

function submitClick(event) {
    event.preventDefault();
    console.log('hi')
    const content =  document.querySelector('table')
    content.innerHTML = '';
    const title = document.getElementById('myform').elements['title'].value
    const author = document.getElementById('myform').elements['author'].value
    const pages = document.getElementById('myform').elements['pages'].value
    const book = new Book(title, author, pages)
    myLibrary.push(book)
    displayBooks()
    dialog.close()
}