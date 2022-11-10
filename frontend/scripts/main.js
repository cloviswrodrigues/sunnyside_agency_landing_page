const hamburguer = document.querySelector('.js-icon-hamburguer');
const menu = document.querySelector('.js-menu');

function toggleMenu(e) {
    menu.classList.toggle('activate');
}

hamburguer.addEventListener('click', toggleMenu)