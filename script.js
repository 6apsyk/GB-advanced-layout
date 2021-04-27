'use strict';

let brandDark = document.querySelector('.brand__dark');
let headerMenu = document.querySelector('.header__menu');
let closeMenu = document.querySelector('.menu__close');

headerMenu.addEventListener('click', function () {
    brandDark.classList.toggle('hidden');
});

closeMenu.addEventListener('click', function () {
    brandDark.classList.toggle('hidden');
});



