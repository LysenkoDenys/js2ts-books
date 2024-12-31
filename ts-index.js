import { createBook, listBooks, deleteBook } from './ts-utils.js';
const books = [];
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const deleteTitleInput = document.getElementById('deleteTitle');
const addButton = document.getElementById('addBook');
const deleteButton = document.getElementById('deleteBook');
const listElement = document.getElementById('bookList');
if (addButton && titleInput && authorInput) {
    addButton.addEventListener('click', () => {
        const title = titleInput.value;
        const author = authorInput.value;
        if (title.length > 0 && author.length > 0) {
            books.push(createBook(title, author));
            updateBookList();
        }
        else {
            alert('Please provide both title and author!');
        }
    });
}
if (deleteButton && deleteTitleInput) {
    deleteButton.addEventListener('click', () => {
        const title = deleteTitleInput.value;
        if (title.length > 0 && deleteBook(books, title)) {
            updateBookList();
        }
        else {
            alert(`Book with title "${title}" not found.`);
        }
    });
}
function updateBookList() {
    if (listElement) {
        listElement.innerHTML = listBooks(books).replace(/\n/g, '<br>');
    }
}
