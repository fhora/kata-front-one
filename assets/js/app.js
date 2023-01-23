const menuBurger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const backdrop = document.querySelector('.backdrop');
menuBurger.addEventListener('click', () => {
  menuBurger.classList.toggle('active');
  menu.classList.toggle('open');
  backdrop.classList.toggle('open');
});
