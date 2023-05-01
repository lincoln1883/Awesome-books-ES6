import { handleFormSubmit } from './addBook.js';

const formButton = document.querySelector('#submit-button');

const submitForm = () => {
  formButton.addEventListener('click', handleFormSubmit);
};

export default submitForm;
