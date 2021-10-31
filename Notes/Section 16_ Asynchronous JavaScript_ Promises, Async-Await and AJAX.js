'use strict';

/*===============================================================================================================================================
                Section 16: Asynchronous JavaScript: Promises, Async/Await and AJAX
239. Section Intro
240. Section Roadmap
241. Asynchronous JavaScript, AJAX and APIs
242. Our First AJAX Call: XMLHttpRequest
243. [OPTIONAL] How the Web Works: Requests and Responses
244. Welcome to Callback Hell
245. Promises and the Fetch API
246. Consuming Promises
247. Chaining Promises
248. Handling Rejected Promises
249. Throwing Errors Manually
250. Coding Challenge #24
251. Asynchronous Behind the Scenes: The Event Loop
252. The Event Loop in Promise
253. Building a Simple Promise
254. Promisifying the Geolocation API
255. Coding Challenge #25
256. Consuming Promises with Async/Await
257. Error Handling With try...catch
258. Returning Values from Async Functions
259. Running Promises is Parallel
260. Other Promise Combinators: 'race', 'allSettled' and 'any'
261. Coding Challenge #26
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
241. Asynchronous JavaScript, AJAX and APIs`);
/*==============================================================*/

/*

Synchronous Code
    * Most code is synchronous
    * Synchronous code is executed line by line
    * Each line of code waits for previous line to finish
    * Long-running operations block code execution
        * alert() - is a good example, untill the opoup is closed code is not executing any further
        * timers



Asynchronous Code
    * Asynchronous code is executed after a task that runs in the "background" finishes
    * Asynchronous code is non-blocking
    * Execution doesn't wait for an asynchronous task to finish its work
    * Coordinating behavior of a program over a period of time



AJAX (Asynchronous JavaScript And XML)
    * Asynchronous JavaScript And XML - Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.



API (Application Programming Interface)
    * Application Programming Interface - Piece of software that can be ueed by another piece of software, in order to allow applications to talk to each other
    * There are many types of APIs in web development
        * DOM API
        * Geolocation API
        * Own Class API
        * "Online" API

        * Weather data
        * Flight data
        * Currency conversion data
        * APIs for sending email or SMS
        * Google Maps
        * ...
    * "Online" API - Application running on a server, that receives requests for data, and sends data back as response
    * We can build our own web APIs (requires back-end development, e.g. with node.js) or use 3rd-party APIs

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
242. Our First AJAX Call: XMLHttpRequest`);
/*==============================================================*/

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

const getCountryData = function (country) {
    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');

    const oldSchoolRequest = new XMLHttpRequest();
    oldSchoolRequest.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    oldSchoolRequest.send();

    oldSchoolRequest.addEventListener('load', function () {
        console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.nativeName}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
                    1
                )} million people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].symbol}</p>
            </div>
        </article>`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

// getCountryData('lithuania');
// getCountryData('poland');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
244. Welcome to Callback Hell`);
/*==============================================================*/

const renderCountry = function (data, className = '') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.nativeName}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
                    1
                )} million people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].symbol}</p>
            </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const oldSchoolRequest1 = new XMLHttpRequest();
    oldSchoolRequest1.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    oldSchoolRequest1.send();

    oldSchoolRequest1.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);

        // Render country 1
        renderCountry(data);

        // Get neighbour country (2)
        const [neighbour] = data.borders;
        if (!neighbour) return;
        // AJAX call country 2
        const oldSchoolRequest2 = new XMLHttpRequest();
        oldSchoolRequest2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        oldSchoolRequest2.send();
        oldSchoolRequest2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryAndNeighbour('lithuania');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
245. Promises and the Fetch API`);
/*==============================================================*/

// Old XML request
// const oldSchoolRequest = new XMLHttpRequest();
//     oldSchoolRequest.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     oldSchoolRequest.send();

// New request API
const modernRequest = fetch('https://restcountries.eu/rest/v2/name/lithuania');
console.log(modernRequest); // Promise {<pending>}

/*

Promise
    * Promise - An object that is used as a placeholder for the future result of an asunchronous operation
    * Promise - A container for an asunchronous delivery value
    * Promise - A container for future value, response from AJAX call

    * We no longer need to relay on events and callbacks passed into asynchronous functions to handle asynchronous results
    * Instead of nesting callbacks, we can chain promises for a sequesnce of asynchronous operations: escaping callback hell
    

Promise Lifecycle
    * Pending - before the future value is available
    * Settled - asynchronous task has finished
        * Fulfilled - value is now available
        * Rejected - an error happened


    * We are able to handle these different states in our code
*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
246. Consuming Promises`);
/*==============================================================*/

/*


const getCountryData246 = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
        });
};
getCountryData246('lithuania');

*/

// Simplified vesion, with arraw functions
const getCountryData246 = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => renderCountry(data[0]));
};
// getCountryData246('lithuania');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
247. Chaining Promises`);
/*==============================================================*/

const getCountryData247 = function (country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => response.json())
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'));
};
// getCountryData247('portugal');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
248. Handling Rejected Promises`);
/*==============================================================*/

/*

.then() - is used after successful promise

.catch() - is used after failed promise

.finally() - is used after all promises

*/

// 1st error is sumulated with Developers Console, to simulate Lost Internet Connection

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

const getCountryData248 = function (country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(
            (response) => response.json()
            // (error) => alert(error) //         <<<<<<<<<<<<<<<<<<<================================ Local error catching
        )
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => response.json())
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((error) => {
            //                   <<<<<<<<<<<<<<<<<<<================================ Global error catching
            console.error(error);
            renderError(`Something went wrong ${error.message}. Try again later`);
        })
        .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', function () {
// getCountryData248('portugal');
// });

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
249. Throwing Errors Manually`);
/*==============================================================*/

// 2nd error is where whatever looked for is not found, 404

/*

const getCountryData249 = function (country) {
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then((response) => {
            console.log(response);

            if (!response.ok) throw new Error(`Country not found (${response.status})`); //      <<<<<<<<<<==============

            return response.json();
        })
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];

            if (!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        })
        .then((response) => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`); //      <<<<<<<<<<==============
            response.json();
        })
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((error) => {
            console.error(error);
            renderError(`Something went wrong ${error.message}. Try again later`);
        })
        .finally(() => (countriesContainer.style.opacity = 1));
};
getCountryData249('dsgsgds');

*/

// This helper function redusis cuplicate code and hendles error 404

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();
    });
};

const getCountryData249 = function (country) {
    // Country 1
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
        .then((data) => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            console.log(`Neighbour: ${neighbour}`);

            if (!neighbour) throw new Error(`No neighbour found`);

            // Country 2
            return getJSON(
                `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
                'Country not found'
            );
        })
        .then((data) => renderCountry(data, 'neighbour'))
        .catch((error) => {
            console.error(error);
            renderError(`Something went wrong ${error.message}. Try again later`);
        })
        .finally(() => (countriesContainer.style.opacity = 1));
};
// getCountryData249('australia');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
251. Asynchronous Behind the Scenes: The Event Loop`);
/*==============================================================*/

/*

Review: JavaScript Runtume
    * JS Engine
        * Heap - where objects are stored in memory, one thread of execution
        * Call Stack - where code is actually executed
    * Web APIs
        * DOM
        * Timers
        * Fetch API
        * ...
    * Callback Queue
        * click
        * timer
        * data
        * ...
    * Event Loop - sends callbacks from queue to call stack



    * Concurrency model - How JavaScript handles multiple tasks happening at the same time



How Asynchronous JavaScript worjkks behind the scenes
    * Call Stack
    * Web APIs
    * Microtasks Queue - like callback queue, but for callbacks related to promises. Has Pioirty over callback queue
    * Callback Queue
    

    * Images - are loaded asynchronously, meaning they are loaded not in 'Call Stack' but in 'Web APIs'.

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
252. The Event Loop in Practice`);
/*==============================================================*/

console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolve Promise 1').then((res) => console.log(res));
Promise.resolve('Resolve promise 2').then((res) => {
    for (let i = 0; i < 2000000; i++) {} //        <<<<<<<<<<<<<<================ increase the number to see the delay
    // console.log(res);
});
// console.log('Test End');
// Stest Start
// Test End
// Resolve Promise 1
// Resolve Promise 2
// 0 sec timer

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
253. Building a Simple Promise`);
/*==============================================================*/

// Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('The draw is happening');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You Won!');
//         } else {
//             reject(new Error('You Lost!'));
//         }
//     }, 2000);
// });
// lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

/*

// Promisify old callback based asynchronouse JavaScript



setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

*/

/*
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
wait(2)
    .then(() => {
        console.log('1 second passed');
        return wait(1);
    })
    .then(() => {
        console.log('2 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('3 seconds passed');
        return wait(1);
    })
    .then(() => {
        console.log('4 seconds passed');
        return wait(1);
    });

// Static Promise methods, .resove() & .reject(), they return immediately

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('Problem!')).catch((x) => console.error(x));

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
254. Promisifying the Geolocation API`);
/*==============================================================*/

// Simple callback based API

// navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.error(err)
// );

// Simple Promise based API

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition((position) => resolve(position)),
        // (err) => reject(err);
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};
// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
    getPosition()
        .then((pos) => {
            const { latitude: lat, longitude: lng } = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })

        .then((response) => {
            if (!response.ok) throw new Error(`Problem with Geocoding ${response.status}`);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        })
        .then((response) => {
            if (!response.ok) throw new Error(`Country not found ${response.status}`);
            return response.json();
        })
        .then((data) => renderCountry(data[0]))
        .catch((error) => console.error(`${error.message}`));
};
btn.addEventListener('click', whereAmI);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
256. Consuming Promises with Async/Await`);
/*==============================================================*/

// async functions are just sytactic sugar, its promises with .then() behind the scenes

const getPosition256 = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const whereAmI256 = async function () {
    // Geolocation
    const pos = await getPosition256();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await responseGeo.json();

    // Country data
    // fetch(`https://restcountries.eu/rest/v2/name/${country}`).then((response) => console.log(response));
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
    const data = await response.json();
    renderCountry(data[0]);
};
// whereAmI256();

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
257. Error Handling With try...catch`);
/*==============================================================*/

// try {
//     let y = 1;
//     const x = 2;
//     y = 3;
// } catch (error) {
//     alert(error.message);
// }

const whereAmI257 = async function () {
    try {
        // Geolocation
        const pos = await getPosition256();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!responseGeo.ok) throw new Error('Problem getting location data');
        const dataGeo = await responseGeo.json();

        // Country data
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
        if (!responseGeo.ok) throw new Error('Problem getting country');
        const data = await response.json();
        renderCountry(data[0]);

        return `You ase in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.log(err);
        renderError(`${err.message}`);
    }
};

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
258. Returning Values from Async Functions`);
/*==============================================================*/

const whereAmI258 = async function () {
    try {
        // Geolocation
        const pos = await getPosition256();
        const { latitude: lat, longitude: lng } = pos.coords;

        // Reverse geocoding
        const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!responseGeo.ok) throw new Error('Problem getting location data');
        const dataGeo = await responseGeo.json();

        // Country data
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}`);
        if (!responseGeo.ok) throw new Error('Problem getting country');
        const data = await response.json();
        renderCountry(data[0]);

        return `You ase in ${dataGeo.city}, ${dataGeo.country}`;
    } catch (err) {
        console.error(err);
        renderError(`${err.message}`);

        // Reject promise returned from async function
        throw err;
    }
};

console.log('1: Will get location');
// const city = whereAmI257();
// console.log(city); // Promise {<pending>}

/*

// whereAmI258() is an acync function, and whereAmI258().then() is old promise technique, we can use async to convert it to new using IFEE

whereAmI258()
    .then((city) => console.log(`2:${city}`))
    .catch((err) => console.error(`2:${err.message}`)) // You ase in PETERBOROUGH, United Kingdom
    .finally(() => console.log('3: Finished getting location'));

*/

(async function () {
    try {
        const city = await whereAmI258();
        console.log(`2: ${city}`);
    } catch (err) {
        console.error(`2: ${err.message}`);
    }
    console.log(`3: Finished getting location`);
})();

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
259. Running Promises in Parallel`);
/*==============================================================*/

const getJSON259 = function (url, errorMsg = 'Something went wrong!') {
    return fetch(url).then((response) => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

const get3Countries = async function (c1, c2, c3) {
    try {
        // There 3 run, one after the onther and uses more time to finish
        // const [data1] = await getJSON259(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJSON259(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3] = await getJSON259(`https://restcountries.eu/rest/v2/name/${c3}`);
        // console.log([data1.capital, data2.capital, data3.capital]);

        // This one will run all at the same time , and will same time
        // BUT ONE FAILED PROMISE will short circuit all promises
        const data = await Promise.all([
            getJSON259(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON259(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON259(`https://restcountries.eu/rest/v2/name/${c3}`),
        ]);
        console.log(data.map((data) => data[0].capital));
    } catch (err) {
        console.error(err);
    }
};
// get3Countries('portugal', 'lithuania', 'britain');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
260. Other Promise Combinators: 'race', 'allSettled' and 'any'`);
/*==============================================================*/

// Promise.race
//              - will settle as soon as one of input Promises is available (doesnt mater successful or failed)
//              - result is just one response, not an array of responses
//              - is used in situations to guard against very long processes
(async function () {
    const res = await Promise.race([
        getJSON259(`https://restcountries.eu/rest/v2/name/italy`),
        getJSON259(`https://restcountries.eu/rest/v2/name/egypt`),
        getJSON259(`https://restcountries.eu/rest/v2/name/mexico`),
    ]);
    console.log(res[0]);
})();

const timeout = function (sec) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error('Request took too long!'));
        }, sec * 1000);
    });
};

Promise.race([getJSON259(`https://restcountries.eu/rest/v2/name/britain`), timeout(1)])
    .then((res) => console.log(res[0]))
    .catch((err) => console.error(err));

// Promise.allSettled
//                    - returns all settled promises, and noesn't short circuit
Promise.allSettled([
    Promise.resolve('Success 1'),
    Promise.reject('Error'),
    Promise.resolve('Success 2'),
]).then((res) => console.log(res));

// Promise.any ES2021
//                    - returns first successful promise
Promise.any([
    Promise.resolve('Success 1'),
    Promise.reject('Error'),
    Promise.resolve('Success 2'),
]).then((res) => console.log(res));
