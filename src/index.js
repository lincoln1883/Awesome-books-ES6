import './style.css';
import { DateTime } from 'luxon';
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

const main = document.querySelector('main');
const timeSlot = document.createElement('p');
const section = document.querySelector('section');
timeSlot.classList.add('localTime');

// const main = document.querySelector('main');
// const timeSlot = document.createElement('p');
// const section = document.querySelector('section');
// timeSlot.classList.add('localTime');

const showTime = () => {
	setInterval(() => {
		const now = DateTime.now();
		const formattedDateTime = now.toFormat('MMMM dd, yyyy - HH:mm:ss a');
		timeSlot.textContent = `Local Time: ${formattedDateTime}`;
	}, 1000);

	main.insertBefore(timeSlot, section);
};

showTime(main, timeSlot, section);
