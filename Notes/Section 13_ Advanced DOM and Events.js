'use strict';

/*===============================================================================================================================================
                Section 13: Advanced DOM and Events
177. Section Intro
178.Section Roadmap
179. PROJECT: "Bankist" Website
180. How the DOM Really Works
181. Selecting, Creating, and Deleting Elements
182. Styles, Attributes, and Classes
183. Implementing Smooth Scrolling
184. Types of Events and Event Handling
185. Event Propagation: Bubbling and Capturing
186. Event Propagation in Practice
187.Event Delegation: Implementing Page Navigation
188. DOM Traversing
189. Building Tabbed Component
190. Passing Arguments to Event Handlers
191. Implementing a Sticky Navigation: The Scrolling Event
192. A Better Way: The Intersection Observer API
193. Revealing Elements on Scroll
194. Lazy Loading Images
195. Building a Slider Component: Prt 1
196. Building a Slider Component: Prt 2
197. Lifecycle DOM Events
198. Efficient Script Loading: defer and async
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
180. How the DOM Really Works`);
/*==============================================================*/

/*
    js <=== DOM ===> Browser
        # Allows us to make JavaScript interact with the browser
        # We can write JavaScript to create, modify and delete HTML elements, set styles, classes and attributes, and listen and respond to events
        # DOM tree is generated from an HTML document, which we can then interact with
        # DOM is a very complex API (Application Programming Interface) that contains lots of methods and properties to interact with the DOM tree
*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
181. Selecting, Creating, and Deleting Elements`);
/*==============================================================*/

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
document.querySelectorAll('.section'); // returns NodeList, does not update automaticaly
document.getElementById('section--1');
document.getElementsByTagName('button'); // returns HTMLCollection, which is updateed live, which means if DOM changes HTMLCollection will be updated automaticaly
document.getElementsByClassName('btn'); // returns HTMLCollection, which is updateed live, which means if DOM changes HTMLCollection will be updated automaticaly

// Creating and inserting elements

// .insertAdjacentHTML();
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
    'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
document.querySelector('header').prepend(message);
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

// Delete element
document.querySelector('.btn--close--cookie').addEventListener('click', function () {
    // message.parentElement.removeChild(message); // old way of deleting elements
    message.remove();
});

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
182. Styles, Attributes, and Classes`);
/*==============================================================*/

// Styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';
console.log(message.style.color); // this doesnt work, because its not inlune style
console.log(message.style.backgroundColor); // this works becaue its an inline style
console.log(getComputedStyle(message).color); // this is how you get styles that are not inline
console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
document.documentElement.style.setProperty('--color-secondary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // file:///C:/Users/tripl/.../logo.png
console.log(logo.getAttribute('src')); // logo.png
console.log(logo.className); // nav__logo

logo.alt = 'beautiful minimalist logo';
console.log(logo.alt); // beautiful minimalist logo

// Non-standard attribute
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company')); // Bankist

const link = document.querySelector('.link');
console.log(link.href); // file:///C:/Users/tripl/Documents/.../Notes/index.html#
console.log(link.getAttribute('href')); // #

// Data attributes

console.log(logo.dataset.versionNumber); // 3.0

// Classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');
// Don't use
logo.className = 'jonas';

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
184. Types of Events and Event Handlers`);
/*==============================================================*/

const h1 = document.querySelector('.mouse');
const alertH1 = function () {
    alert('addEventListener: "mouseenter"');
};

// Old School
h1.onmouseenter = function () {
    alert('onmounseenter: "mouseenter"');
};
// Modern Way
h1.addEventListener('mouseenter', alertH1);

// Remove
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 1000 * 10);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
186. Event Propagation in Practice`);
/*==============================================================*/

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));
document.querySelector('img').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('link', e.target, e.currentTarget);
    console.log(e.currentTarget === this);

    // stop propagation
    // e.stopPropagation();
});
document.querySelector('nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('container', e.target, e.currentTarget);
});
document.querySelector('header').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
});
// To enable event capturing phase, and not event bubbling phase, use 3rd parameter in event handeler function
document.querySelector('img').addEventListener(
    'click',
    function (e) {
        this.style.backgroundColor = randomColor();
        console.log('nav', e.target, e.currentTarget);
    },
    true
);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
188. DOM Traversing`);
/*==============================================================*/

const h188 = document.querySelector('.h188');

// Going downwards: child
console.log(h188.querySelectorAll('.highlight')); // NodeList(2) [span.highlight, span.highlight]
console.log(h188.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h188.children); // HTMLCollection(3) [span.highlight, br, span.highlight]
console.log(h188.innerHTML);
console.log(h188.textContent);
h188.firstElementChild.style.color = 'white';
h188.lastElementChild.style.color = 'yellow';

// Going upwards: parents
console.log(h188.parentNode); // <div class="header__title">...</div>
console.log(h188.parentElement); // <div class="header__title">...</div>
h188.closest('.header__title').style.background = 'var(--gradient-secondary)';
h188.closest('.h188').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h188.previousElementSibling); // null
console.log(h188.nextElementSibling); // <h4>A simpler banking experience for a simpler life.</h4>
console.log(h188.previousSibling);
console.log(h188.nextSibling);
// To get all the siblings, need to use a trick
console.log(h188.parentElement.children); // HTMLCollection(4) [h1.h188, h4, button.btn--text.btn--scroll-to, img.header__img]
[...h188.parentElement.children].forEach(function (el) {
    if (el !== h188) el.style.transform = 'scale(0.5)';
});

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
197. Lifecycle DOM Events`);
/*==============================================================*/

document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTMLparsed and script downloaded, and DOM tree built', e);
});
window.addEventListener('load', function (e) {
    console.log('Page fully loaded', e);
});
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    console.log(
        'This is used to confirm if user wants to leave page in the middle of unfinished form or something',
        e
    );
    // e.returnValue = '';
});

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
198. Efficient Script Loading: defer and async`);
/*==============================================================*/

/*

End of <body>
    * Parse HTML
    * Fetch Script
    * Run Script
    * DOMContentLoaded

    # Scripts are fetched and executed after the HTML is completely parsed

    # Use if you need to support old browsers
    # You can, of course, use different stategies for different scripts. Usually a complete web applications inludes more than just one script

Async in <head>
    * Parse HTML
        * Wait, till script is runned
    * Fetch Script
        * Run Script
    * Parse HTML, finish parsing
    * DOMContentLoaded
    
    # Scripts are fetched asynchronously and executed immediately
    # Usually the DOMContentLoaded event waits for all scripts to execute, exept for async scripts. So, DOMContentLoaded does not wait for an async script
    # Scripts not guaranteed to execute in order

    # Use for 3rd-party scripts where order doesn't matter (e.g. Google Analytics)
    * Parse HTML
        * DOMContentLoaded
    * Fetch Script
    * Run Script

Difer in <head>
    * Parse HTML
    * Fetch Script
    * Run Script
    * DOMContentLoaded

    # Scipts are fetched asynchronously and executed after HTML is completely parsed
    # DOMContentLoaded event fires after defer script is executed
    # Scripts are executed in order

    # This is overall the best solution! Use for your own scripts, and when order matters (e.g. including a library)
    * Parse HTML
    * Fetch Script
    * Run Script
    * DOMContentLoaded

*/
