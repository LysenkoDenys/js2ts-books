import { Book, BookList } from './types.js';

export function createBook(title: string, author: string): Book {
  return { title, author };
}

export function listBooks(books: BookList): string {
  return books
    .map((book, index) => `<li>${book.title} by ${book.author}</li>`)
    .join('\n');
}

export function deleteBook(books: BookList, title: string): boolean {
  const index = books.findIndex((book) => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
}
