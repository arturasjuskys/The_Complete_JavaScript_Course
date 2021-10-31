/*

// Importing Module

// Named Imports
import { addToCart, totalQuantity as quantity, price } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, quantity);

// Importing everything
import * as ShoppingCart from './shoppingCart.js';
console.log('Importing Module');
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.price);

*/

// Default Import
// import add, { addToCart, totalQuantity as quantity, price } from './shoppingCart.js'; //   <<<<========= bad practice to mix default and named import
// console.log(price);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apple', 4);

// this proves that exports/imports are live connection, because export hapenned on empty array, but final imported value reflexts modified array
console.log(cart);

// Module Pattern, this will be executed just once, because its IFEE
const ShoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity}x ${product} added to cart`);
        console.log(`Shipping cost is £${shippingCost}`); // <<<=== this works because of 'closures'
    };

    const orderStock = function (product, quantity) {
        console.log(`${quantity}x ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); //    <<<<<<======= private property, 'undefined'

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 5 },
    ],
    user: { loggedIn: true },
};

// JavaScript shallow clone, reference to the same object in the heap
// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false;
// console.log(stateClone);
// // state.user.loggedIn = true;

// 'lodash' DeepClone
const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

// Testing, but not final Production, its used to not loose states, like in bankist after reloading page you had to log back in every time
if (module.hot) {
    module.hot.accept();
}

class Person {
    greeting = 'Hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.greeting}, ${this.name}`);
    }
}
const jonas = new Person('Jonas');

// ES6 features not transpiled with Babel
console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve('Test').then((x) => console.log(x));

// import to transpile ES6 features namually
// import 'core-js/stable/array/find';
import 'core-js/stable';

// Polifilling async functions
import 'regenerator-runtime/runtime';
