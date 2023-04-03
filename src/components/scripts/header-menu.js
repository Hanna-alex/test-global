const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', openMenu);

function openMenu() {

  menuBtn.classList.toggle('header__menu-btn_active');
  menu.classList.toggle('menu_open')

}