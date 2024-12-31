import { createBook, listBooks, deleteBook } from './utils.js';

const books = [];

const addButton = document.getElementById('addBook');
const deleteButton = document.getElementById('deleteBook');
const listElement = document.getElementById('bookList');

addButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title && author) {
    books.push(createBook(title, author));
    updateBookList();
  } else {
    alert('Please provide both title and author!');
  }
});

deleteButton.addEventListener('click', () => {
  const title = document.getElementById('deleteTitle').value;
  if (title && deleteBook(books, title)) {
    updateBookList();
  } else {
    alert(`Book with title "${title}" not found.`);
  }
});

function updateBookList() {
  listElement.innerHTML = listBooks(books).replace(/\n/g, '<br>');
}
