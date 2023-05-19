import Book from './book.js';

const bookList = document.querySelector('.book-display');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const getBooks = () => {
  const bookInfo = localStorage.getItem('books');
  if (bookInfo !== null && bookInfo !== undefined) {
    return JSON.parse(bookInfo);
  }
  return [];
};

const books = getBooks();

const addBookToList = () => {
  bookList.innerHTML = '';
  if (Array.isArray(books)) {
    books.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('book-list');
      bookItem.innerHTML = `"${book.title}"  by  "${book.author}"<button class="remove" data-id="${book.id}">Remove</button>`;
      bookList.appendChild(bookItem);
    });
  }
};

const handleFormSubmit = () => {
  const title = titleInput.value;
  const author = authorInput.value;
  const book = new Book(title, author);
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  addBookToList();
  titleInput.value = '';
  authorInput.value = '';
};

export {
  books,
  titleInput,
  authorInput,
  handleFormSubmit,
  addBookToList,
  getBooks,
};
