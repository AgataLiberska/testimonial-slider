// on click of button
// fade the image out
// fade out all of the texts
// get the new image & texts WHEN ANIMATION ENDS
// fade in the new image anx texts

import { testimonials } from './seeds.js';

const image = document.querySelector('.js-image');
const person = document.querySelector('.js-author');
const role = document.querySelector('.js-role');
const text = document.querySelector('.js-text');

const next = document.querySelector('.js-next');
const prev = document.querySelector('.js-next');

let index = 0;

next.addEventListener('click', (e) => {
    index++;

    if (index === testimonials.length) {
        index = 0;
    }


    image.classList.remove('fade-from-right');
    image.classList.add('fade-to-right');

    image.addEventListener('animationend', (e) => {
        if (e.animationName === 'fade-to-right') {
            image.style.backgroundImage = `url(${testimonials[index].image})`;
        }
        image.classList.remove('fade-to-right');
        image.classList.add('fade-from-right');
    })



    person.classList.add('fade-to-left');
    role.classList.add('fade-to-left');
    text.classList.add('fade-to-left');


})