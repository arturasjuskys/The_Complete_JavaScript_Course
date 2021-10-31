'use strict';

/*===============================================================================================================================================
                Section 10: A Closer Look at Functions
124. Section Intro
125. Section Roadmap
126. Default Parameters
127. How Passing Arguments Works: Values vs. Reference
128. First-Class and Higher-Order Functions
129. Functions Accepting Callback Functions
130. Functions Returning Functions
131. The 'call' and 'apply' Methods
132. The 'bind' Method
133. Coding Challenge #1
134. Immediately Invoked Function Expressions (IIFE)
135. Closures
136. More Closure Examples
137. Coding Challenge #2
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
124. Section Intro`);
/*==============================================================*/

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 1000 / numPassengers) {
    // ES5 defaults
    // numPassengers = numPassengers || 1;
    // price = price || 100;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123'); // {flightNum: "LH123", numPassengers: 1, price: 1000}
createBooking('LH123', 2, 280); // {flightNum: "LH123", numPassengers: 2, price: 280}
createBooking('LH123', 5); // {flightNum: "LH123", numPassengers: 5, price: 200}
createBooking('LH123', 8); // {flightNum: "LH123", numPassengers: 8, price: 125}

// to skip parameter
createBooking('LH123', undefined, 1000); // {flightNum: "LH123", numPassengers: 1, price: 1000}

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
127. How Passing Arguments Works: Values vs. Reference`);
/*==============================================================*/

// This example shows how primitive value of "flight = 'LH123'" was reasigned, but object "jonas" was changed and then referenced.
const flight = 'LH123';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284,
};
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 24739479284) {
        alert('Checked In');
    } else {
        alert('Wrong Passport!');
    }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(jonas);
checkIn(flight, jonas);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
128. First-Class and Higher-Order Functions`);
/*==============================================================*/

/*
    First-Class Functions
        # JavaScript treats functions as FIRST-CLASS CITIZENS
        # This means that functions are SIMPLY VALUES
        # Functions are just another "TYPE" OF OBJECT

        # Store functions in variables or properties
        # Pass functions as arguments to OTHER functions
        # Return functions FROM functions
        # Call methos on functions
    
    

    Higher-Order Functions
        # A function that RECEIVES another function as an argument, that RETURNS a new function, or BOTH
        # This is only possible because of first-class functions

        1. Function that receives another function (Event Listener)
        2. Function that returns new function
*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
129. Functions Accepting Callback Functions`);
/*==============================================================*/

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord
transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
130. Functions Returning Functions`);
/*==============================================================*/

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};
const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven
greet('Hello')('Jonas'); // Hello Jonas

// Challenge
const greet2 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet2('Hi')('Jonas'); // Hi Jonas

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
131. The call and apply Methods
`);
/*==============================================================*/

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH635
console.log(lufthansa.bookings);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Call method

// Does NOT work
// book(23, 'Sarah Williams');
book.call(euroWings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on undefined flight EW23
console.log(euroWings);
book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper'); // Mary Cooper booked a seat on Swiss Air Lines flight LX583

// Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583
console.log(swiss);

book.call(swiss, ...flightData); // George Cooper booked a seat on Swiss Air Lines flight LX583

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
132. The bind Method`);
/*==============================================================*/

// book.call(euroWings, 23, 'Sarah Williams');
const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
console.log(euroWings);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// addVAT = value => value + value * 0.23;
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// Challenge
const addVAT2 = function (vat) {
    return function (num) {
        console.log(`${addVAT2.name}: ${num + num * vat}`);
    };
};
addVAT2(0.23)(100);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
134. Immediately Invoked Function Expressions (IIFE)`);
/*==============================================================*/

// (function () { })();

// Function
const runOnce = function () {
    console.log('Function: This will never run again');
};
runOnce();

// IIFE
(function () {
    console.log('IIFE: This will never run again');
})();

// Arraw Function
(() => console.log('Arrow Function: This will never run again'))();

// Private variables
{
    const constPrivate = 23;
    let letPrivate = 46;
}

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
135. Closures`);
/*==============================================================*/

/*
    Closure
        # A function has access to the variable environment (VE) of hte execution context in which it was created, even after the function was executed
        # CLOSURE: VE attached to the function, exactly as it was at the time and place the function was created
        # We do not have to manually create closures, this is a JavaScript feature that happens automatically. We can't even access closed-over variables explicitly. A closure is not a tangible JavaScript object.


        More examples

            # A Closure is the closed-over variable environment of hte execution context in which a function was created, even after that execution context is gone
            # A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time
            # A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place
            # A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created.
*/

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
// f anonymous() => Scopes => Closures => passengerCount:

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
136. More Closure Examples`);
/*==============================================================*/

// Example 1
// Re-assogning variables closure through closure

let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};
const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};
g();
f(); // 46      23 * 2
console.dir(f);
// Re-assigned f function
h();
f(); // 1554       777 * 2
console.dir(f);

// Example 2
// It shous that inner function is executed on its own without outer function(boardPassengers), effect of closure
// 'perGroup' variable shows that 'closure' have priority over 'scope chain'

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
