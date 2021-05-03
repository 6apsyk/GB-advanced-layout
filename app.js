'use strict';

let filterPopup = document.querySelector('.filters__popup');
let filterLable = document.querySelector('.filters__lable');
let filterIcon = document.querySelector('.filters__icon');

let filterheader = document.querySelectorAll('.filters__header');
let filtercolor1 = document.querySelector('.items1');
let filtercolor2 = document.querySelector('.items2');
let filtercolor3 = document.querySelector('.items3');

let filtersize = document.querySelector('.filters__rigth-size-wrap');
let sizepopup = document.querySelector('.size__popup');


filtersize.addEventListener('click', function () {
    sizepopup.classList.toggle('size__popup-hidden');
});

filtercolor1.addEventListener('click', function () {
    filtercolor1.classList.toggle('filter__header-color');
});
filtercolor2.addEventListener('click', function () {
    filtercolor2.classList.toggle('filter__header-color');
});
filtercolor3.addEventListener('click', function () {
    filtercolor3.classList.toggle('filter__header-color');
});

filterheader.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('navigation__hidden');
    });
});

filterLable.addEventListener('click', function () {
    filterPopup.classList.toggle('filters__hidden');
    filterLable.classList.toggle('filter__lable-color');
    filterIcon.classList.toggle('filter__icon-color');


    if (filterIcon.getAttribute('src') === "images/filter.svg") {
        filterIcon.setAttribute('src', "images/filterPink.svg");
    } else {
        filterIcon.setAttribute('src', "images/filter.svg");
    }
});

filterIcon.addEventListener('click', function () {
    filterPopup.classList.toggle('filters__hidden');
    filterLable.classList.toggle('filter__lable-color');
    filterIcon.classList.toggle('filter__icon-color');


    if (filterIcon.getAttribute('src') === "images/filter.svg") {
        filterIcon.setAttribute('src', "images/filterPink.svg");
    } else {
        filterIcon.setAttribute('src', "images/filter.svg");
    }
});



