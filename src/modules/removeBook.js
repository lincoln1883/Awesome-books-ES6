import { books, addBookToList } from './addBook.js';

const removeBookFromList = (id) => {
  books.splice(id, 1);
  localStorage.setItem('books', JSON.stringify(books));
  addBookToList();
};

const handleRemoveButtonClick = (e) => {
  if (e.target.matches('.remove')) {
    const id = e.target.dataset;
    removeBookFromList(id);
  }
};

export { handleRemoveButtonClick, removeBookFromList };
