// on click of button
// fade the image out
// fade out all of the texts
// get the new image & texts WHEN ANIMATION ENDS
// fade in the new image anx texts

import { testimonials } from './seeds.js';

const image = document.querySelector('.js-image');
const copy = document.querySelector('.js-copy');
const person = document.querySelector('.js-author');
const role = document.querySelector('.js-role');
const text = document.querySelector('.js-text');

const next = document.querySelector('.js-next');
const prev = document.querySelector('.js-prev');

let index = 0;

function getTestimonial() {

    image.classList.remove('fade-from-right');
    image.classList.add('fade-to-right');

    image.addEventListener('animationend', (e) => {
        if (e.animationName === 'fade-to-right') {
            image.style.backgroundImage = `url(${testimonials[index].image})`;
        }
        image.classList.remove('fade-to-right');
        image.classList.add('fade-from-right');
    })

    copy.classList.remove('fade-from-left');
    copy.classList.add('fade-to-left');

    copy.addEventListener('animationend', (e) => {
        if(e.animationName === 'fade-to-left') {
            person.textContent = `${testimonials[index].name}`;
            role.textContent = `${testimonials[index].role}`;
            text.textContent = `${testimonials[index].text}`;
        }

        copy.classList.remove('fade-to-left');
        copy.classList.add('fade-from-left');
    })
}

next.addEventListener('click', (e) => {
    index++;

    if (index === testimonials.length) {
        index = 0;
    }

    getTestimonial()

})

prev.addEventListener('click', (e) => {
    index--;

    console.log(index);
    if (index < 0) {
        index = testimonials.length -1;
        console.log(index, 'hello') 
    }

    getTestimonial();
})