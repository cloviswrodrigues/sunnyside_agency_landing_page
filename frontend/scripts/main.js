const hamburguer = document.querySelector('.js-icon-hamburguer');
const menu = document.querySelector('.js-menu');

function toggleMenu(e) {
    menu.classList.toggle('activate');
}

function closeMenu() {
    menu.classList.remove('activate');
}

hamburguer.addEventListener('click', toggleMenu)

window.addEventListener('mouseup', (e) => {
    let boxMenu = document.querySelector('.js-menu');
    console.log(boxMenu);
    console.log(e.target);
    if (e.target != boxMenu) {
        closeMenu();
    }   
})