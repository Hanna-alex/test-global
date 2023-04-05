const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', toggleMenu);
menu.addEventListener('click', (event) => {
  let target = event.target
  if (target.classList.contains('menu__link')) {
    closeMenu()
  }

})

function toggleMenu() {

  menuBtn.classList.toggle('header__menu-btn_active');
  menu.classList.toggle('menu_open')

}

function closeMenu() {
  menuBtn.classList.remove('header__menu-btn_active');
  menu.classList.remove('menu_open')
}