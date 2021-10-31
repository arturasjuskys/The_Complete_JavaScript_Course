'use strict';

/*===============================================================================================================================================
                Section 11: Working with Arrays
138. Section Intro
139. Section Roadmap
140. Simple Array Methods
141. Looping Arrays: 'forEach'
142. 'forEach' with Maps and Sets
143. PROJECT: "Bankist" App
144. Creating DOM Elements
145. Coding Challenge #16
146. Data Transformations: map, filter, reduce
147. The 'map' Method
148. Computing Usernames
149. The 'filter' Method
150. The 'reduce' Method
151. Coding Challenge #17
152. THe Magic of Chaining Methods
153. Coding Challenge #18
154. The 'find' Method
155. Implementing Logic
156. Implementing Transfers
157. The ;findIndex' Method
158. 'some' and 'every'
159. 'flat' and 'flatMap'
160. Sorting Arrays
161. More Ways of Creating and Filling Arrays
162. Summary: Wich Array Methods to Use?
163. Coding Challenge #19
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
140. Simple Array Methods`);
/*==============================================================*/

let arr = ['a', 'b', 'c', 'd', 'e'];

// .slice()
// does not mutate original array
console.log(arr.slice(2)); // ["c", "d", "e"]
console.log(arr.slice(2, 4)); // ["c", "d"]
console.log(arr.slice(-2)); // ["d", "e"]
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ["b", "c"]
console.log(arr.slice()); // ["a", "b", "c", "d", "e"]
console.log([...arr]); // ["a", "b", "c", "d", "e"]

// .splice()
// mutates original array, usually used to delete elements from array
// console.log(arr.splice(2)); // ["c", "d", "e"]
arr.splice(-1);
console.log(arr); // ["a", "b", "c", "d"]
arr.splice(1, 2);
console.log(arr); // ["a", "d"]

// reverse()
// mutate original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // ["f", "g", "h", "i", "j"]
console.log(arr2); // ["f", "g", "h", "i", "j"]

// concat()
const letters = arr.concat(arr2);
console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...arr, ...arr2]); // ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// .join()
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
141. Looping Arrays: 'forEach'`);
/*==============================================================*/

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}:You withrew ${Math.abs(movement)}`);
    }
}

// forEach loop
movements.forEach(function (movement, i, arr) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}:You withrew ${Math.abs(movement)}`);
    }
});

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
142. 'forEach' With Maps and Sets`);
/*==============================================================*/

// Map
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // Set(3) {"USD", "GBP", "EUR"}
currenciesUnique.forEach(function (value, _, map) {
    console.log(`${value}: ${value}`);
});

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
146. Data Transformations: 'map', 'filter', 'reduce'`);
/*==============================================================*/

/*
    Map
        # 'map' returns a new array containing the results of applying an operation on all original erray elements


    Filter
        # 'filter' returns a new array containing the array elements that passed a specified test condition


    Reduce
        # 'reduce' boils ("reduces") all array elements down to one single value (e.g. adding all element together)


*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
147. The 'map' Method`);
/*==============================================================*/

// 'map' returns new array
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// normal callback function
const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
});

// arrow function
const movementUSDArrow = movements.map((mov) => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementUSDArrow);

const movementDescriptions = movements.map(
    (mov, i, arr) => `Movement ${i + 1}:You ${mov > 0 ? 'deposited' : 'withrew'} ${Math.abs(mov)}`
);
console.log(movementDescriptions);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
149. The 'filter' Method`);
/*==============================================================*/

// .filter() with arrow function as callback function
const deposits = movements.filter((mov, i, arr) => mov > 0);
console.log(movements);
console.log(deposits);

// for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
150. The 'reduce' Method`);
/*==============================================================*/

// .reduce() with normal callback function
console.log(movements);
const balance = movements.reduce(function (accumulator, value, i, arr) {
    console.log(`Iteration ${i}: ${accumulator}`);
    return accumulator + value;
}, 0);
console.log(balance);

// .reduce() with arrow function
const balanceArrow = movements.reduce((accumulator, mov) => (accumulator += mov), 0);
console.log(balanceArrow);

// for of loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
// .reduce(arrow fn with turnary operator)
const maxValue = movements.reduce(
    (accumulator, val) => (accumulator < val ? (accumulator = val) : accumulator),
    movements[0]
);
console.log(maxValue);
// Maximum value - alternative
const maxAlt = movements.reduce((acc, val) => {
    if (acc > val) return acc;
    else return val;
}, movements[0]);
console.log(maxAlt);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
152. The Magic of Chaining Methods  `);
/*==============================================================*/

// const eurToUsd = 1.1;
const totalDepositsUSD = movements
    .filter((val) => val > 0)
    .map((val, i, arr) => {
        // console.log(arr); - this is to find error and debug
        return val * eurToUsd;
    })
    .reduce((acc, val) => acc + val, 0);
console.log(totalDepositsUSD);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
154. The 'find' Method`);
/*==============================================================*/

// .find() returns 1st element it finds, not a new array with all elements meeting the condition like .filter()
const firstWithdrawal = movements.find((val) => val < 0);
console.log(movements);
console.log(firstWithdrawal);

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];
const account = accounts.find((acc) => acc.owner === 'Jessica Davis');
console.log(account); // {owner: "Jessica Davis", movements: Array(8), interestRate: 1.5, pin: 2222}

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
158. 'some' and 'every'`);
/*==============================================================*/

console.log(movements);

// Equality
console.log(movements.includes(-130)); // true

// .some() - Condition
const anyDeposits = movements.some((val) => val > 500);
console.log(anyDeposits); // true

// .every()
console.log(movements.every((val) => val > 0)); // false
console.log(account4.movements.every((val) => val > 0)); // true

// Seperate Callback
const deposit = (val) => val > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // (5) [200, 450, 3000, 70, 1300]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
159. 'flat' and 'flatMap'`);
/*==============================================================*/

const arr159 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr159.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arr159Deep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr159Deep.flat()); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arr159Deep.flat(1)); // [Array(2), 3, 4, Array(2), 7, 8]
console.log(arr159Deep.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

// .flat()
// Add-up all accounts movements
const overallBalance = accounts
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, val) => acc + val);
console.log(overallBalance);

// .flatMap()
// goes just 1 level deep in array
const overallBalance2 = accounts.flatMap((acc) => acc.movements).reduce((acc, val) => acc + val);
console.log(overallBalance2);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
160. Sorting Arrays`);
/*==============================================================*/

// by default .sort(), works with strings

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // ["Adam", "Jonas", "Martha", "Zach"]
console.log(owners); // ["Adam", "Jonas", "Martha", "Zach"]

// Numbers
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]

// return < 0, [a, b] (keep order)
// return > 0, [b, a] (switch order)

// Ascending Order
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending Order
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
161. More Ways of Creating and Filling Arrays`);
/*==============================================================*/

// It was created to convert array like structure to arays, thats why its called '.from()'

const arr161 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// Empty Array + .fill() method
const x = new Array(7);
console.log(x); // [empty × 7]
console.log(x.map(() => 5)); // [empty × 7]

// x.fill(1);
// console.log(x); // [1, 1, 1, 1, 1, 1, 1]
// x.fill(1, 3);
// console.log(x); // [empty × 3, 1, 1, 1, 1]
// x.fill(1, 3, 5);
// console.log(x); // [empty × 3, 1, 1, empty × 2]

// .fill(value, start, end)
arr161.fill(23, 4, 6);
console.log(arr161); // [1, 2, 3, 4, 23, 23, 7, 8]

// .from() - Array function + .from({length}, callback/arrow function) method
const y161 = Array.from({ length: 7 }, () => 1);
console.log(y161); // [1, 1, 1, 1, 1, 1, 1]

// const z161 = Array.from({ length: 8 }, (cur, i) => i + 1);
const z161 = Array.from({ length: 8 }, (_, i) => i + 1);
console.log(z161); // [1, 2, 3, 4, 5, 6, 7, 8]

// Challenge - 100 random dice rolls
const dice100 = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6));
console.log(dice100);
