// згорнення меню
let menu = document.querySelector('menu');
menu.addEventListener('click', mobileMenu);
function mobileMenu() {
  menu.classList.toggle('mobileMenu')
}
