const sections = document.getElementsByClassName('sections');
const navList = document.getElementsByClassName('nav-item');

const hamburger = document.querySelector('.hamburger');
const navLists = document.querySelector('.nav-lists');

export const toggleMenu = (hamburger, navLists) => {
  hamburger.addEventListener('click', () => {
    navLists.classList.toggle('dropdown');
  });
  navLists.addEventListener('click', () => {
    navLists.classList.remove('dropdown');
  });
};

export const handleNavigation = (navList, sections) => {
  for (let i = 0; i < navList.length; i += 1) {
    navList[i].addEventListener('click', () => {
      sections[i].classList.add('display');
      navList[i].classList.add('active');
      for (let j = 0; j < navList.length; j += 1) {
        if (i !== j) {
          sections[j].classList.remove('display');
          sections[j].classList.add('hidden');
          navList[j].classList.remove('active');
        }
      }
    });
  }
};

export {
  navList, sections, hamburger, navLists,
};
