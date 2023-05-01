import { handleFormSubmit, addBookToList } from './modules/addBook.js';
import { handleRemoveButtonClick } from './modules/removeBook.js';
import { handleNavigation, toggleMenu } from './modules/navigation.js';
import Book from './modules/book.js';

const formButton = document.querySelector('#submit-button');
const bookList = document.querySelector('.book-display');

const myBook = new Book();

formButton.addEventListener('click', handleFormSubmit);
bookList.addEventListener('click', handleRemoveButtonClick);
addBookToList(myBook);

const sections = document.getElementsByClassName('sections');
const navList = document.getElementsByClassName('nav-item');
handleNavigation(navList, sections);

const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.nav-lists');
toggleMenu(hamburger, navLists);
