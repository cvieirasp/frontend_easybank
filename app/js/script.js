const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function() {
  // Close Hamburger Menu
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');
    fadeElems.forEach(element => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else { // Open Hamburger Menu
    header.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach(element => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});