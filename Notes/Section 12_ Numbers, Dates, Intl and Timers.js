'use strict';

/*===============================================================================================================================================
                Section 12: Numbers, Dates, Intl and Timers
164. Section Intro
165. Section Roadmap
166. Converting and Checking Numbers
167. Math and Rounding
168. The Remainder Operator
169. Working with BigInt
170. Creating Dates
171. Adding Dates to "Bankist" App
172. Operations with Dates
173. Internationalizing Dates 'Intl'
174. Internationalizing Numbers 'Intl'
175. Timers: 'setTimeout' and 'setInterval'
176. Implementing a Countdown Timer
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
166. Converting and Checking Numbers`);
/*==============================================================*/

/*
    Base 10
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    
    Base 2 - Binary
        0, 1
*/

console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Converting 'str' to 'number'
console.log(Number('23'));
console.log(+'23');

// Parsing
// Number.parseInt('value', [number base])
console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e92', 10)); // NaN
console.log(Number.parseInt('  2.5rem  ', 10)); // 2
console.log(Number.parseFloat('  2.5rem  ', 10)); // 2.5

// Checking if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// Checking if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false

console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(20 / 0)); // false

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
167. Math and Rounding`);
/*==============================================================*/

// Square Root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// Cube Root
console.log(8 ** (1 / 3)); // 2

// Max Value
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// Min Value
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// Constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793 - calculating area of a circle

// Random Numbers
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round('23.9')); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil('23.9')); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding Decimals
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
console.log(+(2.345).toFixed(2)); // 2.35
console.log(Number((2.345).toFixed(2))); // 2.35

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
168. The Remainder Operator`);
/*==============================================================*/

console.log(5 % 2); // 1
console.log(5 / 2); // 5 = 2 * 2 + 1

// Checking for even/odd Numers
console.log(6 % 2); // 0
console.log(7 % 2); // 1
const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(514)); // true

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
169. Working with BigInt`);
/*==============================================================*/

// Number privitimes are represented by 64 bits, only 53 to store value other to stre sign and decimal place. This creates lagest safe number below

console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// numbers over safe limit
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994
console.log(2 ** 53 + 3); // 9007199254740996
console.log(2 ** 53 + 4); // 9007199254740996

// BigInt()
console.log(6578765435468743546875643541357687n);
console.log(BigInt(6578765435468743546875643541357687));

// Operations
console.log(10000n + 10000n);
console.log(45345896345934563987576508923756n * 12543545n);
const huge = 5634257823465239784624598765n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 20); // false
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true
console.log(huge + ' is REALLY big number!!!'); // 5634257823465239784624598765 is REALLY big number!!!

// Division
console.log(10n / 3n); // 3n
console.log(10 / 3); // 3.3333333333333335

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
170. Creating Dates`);
/*==============================================================*/

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

// Create Date, 4 ways to do so

const now = new Date();
console.log(now); // Wed Nov 25 2020 17:23:57 GMT+0000 (Greenwich Mean Time)

console.log(new Date('Nov 25 2020 17:23:57')); // Wed Nov 25 2020 17:23:57 GMT+0000 (Greenwich Mean Time)
console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0000 (Greenwich Mean Time)
console.log(new Date(account1.movementsDates[0])); // Mon Nov 18 2019 21:31:17 GMT+0000 (Greenwich Mean Time)
console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0000 (Greenwich Mean Time)
// Unix Time
console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Greenwich Mean Time)
// Create a date three days ahead - new Date([days] * [hours] * [minutes] * [miliseconds])
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 01:00:00 GMT+0100 (Greenwich Mean Time)

// Date methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10 - months are 0 based
console.log(future.getDate()); // 19 - month day
console.log(future.getDay()); // 4 - weekday
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.toISOString()); // 2037-11-19T15:23:00.000Z
// Time stamp - in miliseconds
console.log(future.getTime()); // 2142256980000

console.log(new Date(2142256980000)); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)
console.log(new Date(future.getTime())); // Thu Nov 19 2037 15:23:00 GMT+0000 (Greenwich Mean Time)

console.log(Date.now()); // 1606326204486

future.setFullYear(2040);
future.setMonth(0);
future.setDate(1);
future.setHours(0);
future.setMinutes(0);
future.setSeconds(0);
console.log(future); // Sun Jan 01 2040 00:00:00 GMT+0000 (Greenwich Mean Time)

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
172. Operations With Dates`);
/*==============================================================*/

const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1); // 10

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
173. Internationalizing Dates (Intl)`);
/*==============================================================*/

// Experimenting with API
console.log(now);
const locale = navigator.language;
console.log(locale);
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    // month: 'long',
    // month: '2-digit',
    year: 'numeric',
    // year: '2-digit',
    weekday: 'long',
    // weekday: 'short',
    // weekday: 'narrow',
};
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));
console.log(new Intl.DateTimeFormat(locale, options).format(now));
console.log(new Intl.DateTimeFormat('lt-LT', options).format(now));
console.log(new Intl.DateTimeFormat('en-US', options).format(now));
console.log(new Intl.DateTimeFormat('ar-SY', options).format(now));

// Google Search - iso language code table

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
174. Internationalizing Numbers (Intl)`);
/*==============================================================*/

const num174 = 23523453246.42;
const options174 = {
    style: 'currency',
    currency: 'EUR',
    // useGrouping: false,
    // style: 'unit',
    // style: 'percent',
    // unit: 'celsius',
    // unit: 'mile-per-hour',
};
console.log('GB:      ', new Intl.NumberFormat('en-GB', options174).format(num174));
console.log('LT:      ', new Intl.NumberFormat('lt-LT', options174).format(num174));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options174).format(num174));
console.log('Syria  : ', new Intl.NumberFormat('ar-SY', options174).format(num174));

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
175. Timers: 'setTimeout' and 'setInterval'`);
/*==============================================================*/

const ingredients = ['olives', 'spinach'];

// setTimeout()

setTimeout(
    (ing1, ing2) => console.log(`Here is your Order: Pizza with ${ing1} and ${ing2}`),
    3 * 1000,
    'olives',
    'spinach'
);
console.log('Waiting...');
// Cancel timer on condition
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
    3 * 1000,
    ...ingredients
);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval()
setInterval(function () {
    const now = new Date();
    console.log(
        new Intl.DateTimeFormat(navigator.language, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }).format(now)
    );
}, 1000);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
`);
/*==============================================================*/
