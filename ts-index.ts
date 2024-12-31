import { createBook, listBooks, deleteBook } from './ts-utils.js';
import { BookList } from './types.js';

const books: BookList = [];

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const deleteTitleInput = document.getElementById('deleteTitle');

const addButton = document.getElementById('addBook');
const deleteButton = document.getElementById('deleteBook');
const listElement = document.getElementById('bookList');

if (addButton && titleInput && authorInput) {
  addButton.addEventListener('click', () => {
    const title = (titleInput as HTMLInputElement).value;
    const author = (authorInput as HTMLInputElement).value;
    if (title.length > 0 && author.length > 0) {
      books.push(createBook(title, author));
      updateBookList();
    } else {
      alert('Please provide both title and author!');
    }
  });
}

if (deleteButton && deleteTitleInput) {
  deleteButton.addEventListener('click', () => {
    const title = (deleteTitleInput as HTMLInputElement).value;
    if (title.length > 0 && deleteBook(books, title)) {
      updateBookList();
    } else {
      alert(`Book with title "${title}" not found.`);
    }
  });
}

function updateBookList() {
  if (listElement) {
    listElement.innerHTML = listBooks(books).replace(/\n/g, '<br>');
  }
}
