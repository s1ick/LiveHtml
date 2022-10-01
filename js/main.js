document.addEventListener("DOMContentLoaded", function (event) {
    const button = document.querySelector('#search');
    const menu = document.querySelector('.main-menu');
    button.addEventListener('click', (event) => {
        menu.classList.toggle('active');
    });
});