# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![Screenshot of my solution](./images/slider-screenshot.png)

### Links

- [View the live page here](https://testimonial-slider-sage.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

From the get-go, I knew that although this project may seem very simple, parts of it would be quite tricky. I knew that I wanted all background images to be completely static on the page, and the content of the testimonials to slide/fade in and out. This required thorough planning and quite a few adjustments on the way, but I achieved the planned result.

Positioning images of testimonial authors in a way that was close to the design and looked well on all devices proved to be the most challenging element of this project. Eventually, I decided to set the images as background in my CSS. To ensure that they would still be accessible to screen reader users, I added `role="img"` and set an `aria-label` to the `<div>` they are on.

I also wanted to ensure that the slider would keep its functionality no matter how many testimonials were added to it. All testimonial data is stored in an array of objects, and to showcase the functionality better, I added a few extra testimonials.

To animate the slider, I initially used `@keyframes` animations. However, this meant that in JavaScript, I repeatedly added and removed classes to achieve the desired effect. To simplify this, I decided to skip animations and rely on simple transitions instead. Thanks to this, my code became a lot cleaner and more readable. You can see this below: the first code snippet shows initial code, and the second snippet shows the final version.

```js
// this is the initial code, relying on @keyframes animation
function getTestimonial() {

    image.classList.remove('fade-from-right');
    image.classList.add('fade-to-right');

    image.addEventListener('animationend', (e) => {
        if (e.animationName === 'fade-to-right') {
            image.style.backgroundImage = `url(${testimonials[index].image})`;
            image.setAttribute("aria-label", `${testimonials[index].alt}`);
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
```
```js
// the final function, slider effect based on CSS transitions
function getTestimonial() {

    image.classList.add('fade-to-right');
    image.addEventListener('transitionend', () => {
        image.style.backgroundImage = `url(${testimonials[index].image})`;
        image.setAttribute("aria-label", `${testimonials[index].alt}`);
        image.classList.remove('fade-to-right');
    })

    copy.classList.add('fade-to-left');
    copy.addEventListener('transitionend', () => {
        person.textContent = `${testimonials[index].name}`;
        role.textContent = `${testimonials[index].role}`;
        text.textContent = `${testimonials[index].text}`;
        copy.classList.remove('fade-to-left');
    })
}
```

## Author

- Frontend Mentor - [@AgataLiberska](https://www.frontendmentor.io/profile/AgataLiberska)

## Acknowledgments

Images not provided by Frontend Mentor with this challenge are from [usnplash.com](unsplash.com)

- Jenna: Photo by [Anne Peres](https://unsplash.com/@anneperess?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Ian: Photo by [Charles Etoroma](https://unsplash.com/@charlesetoroma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Olivia: Photo by [alex starnes](https://unsplash.com/@alexstarnes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  
  
  
