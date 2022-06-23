// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    menu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
    if (window.scrollY > 0) {
        document.querySelector('header').classList.add('navbar-fixed');
        // document.querySelector('nav').classList.add('backdrop-menu');
    } else {
        document.querySelector('header').classList.remove('navbar-fixed');
        // document.querySelector('nav').classList.remove('backdrop-menu');
    }
}