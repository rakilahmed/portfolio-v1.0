window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list li');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  // Burger -> Active
  nav.classList.toggle('nav-active');

  if (nav.classList.contains('nav-active')) {
    body.classList.add('noscroll');
  } else {
    body.classList.remove('noscroll');
  }

  // Burger becoms X
  burger.classList.toggle('toggle');
});

nav.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
  body.classList.remove('noscroll');
});
