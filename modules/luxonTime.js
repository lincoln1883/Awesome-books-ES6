import { DateTime } from '../node_modules/luxon/src/luxon.js';

const main = document.querySelector('main');
const timeSlot = document.createElement('p');
const section = document.querySelector('section');
timeSlot.classList.add('localTime');

const showTime = () => {
  setInterval(() => {
    const now = DateTime.now();
    const formattedDateTime = now.toFormat('MMMM dd, yyyy - HH:mm:ss a');
    timeSlot.textContent = `Local Time: ${formattedDateTime}`;
  }, 1000);

  main.insertBefore(timeSlot, section);
};

export default showTime;