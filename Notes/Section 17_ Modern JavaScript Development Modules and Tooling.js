'use strict';

/*===============================================================================================================================================
                Section 17: Modern JavaScript Development: Modules and Tooling
262. Section Intro
263. Section Roadmap
264. An Overview of Modern JavaScript Development
265. An Overview of Modules in JavaScript
266. Exploring and Improving in ES6 Modules
267. The Modules Pattern
268. CommonJS Modules
269. A Brief Introduction to the Command Line
270. Introduction to NPM
271. Bundling with Parcel and NPM Scripts
272. Configuring Babel and Polyfilling
273. Modern, Clean and Declarative JavaScript Programming
274. Let's Fix Some Bad Code!
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
264. An Overview of Modern JavaScript Development`);
/*==============================================================*/

/*

Modern JavaScript Deveopment
    Development
        * Module
        * Module
        * 3rd-Party Package
        Build Process
        * Bundling - joining all modules into one file
        * webpack
        * Parcel
        * Transpiling/Polyfilling - converting modern JavaScript back to ES5
        * Babel
        Production
        * JavaScript Bundle - script used by end user
        
        
        
        
    NPM (Node Package Manager) - both repository and software
        * Contains open-source packages to include 3rd-party code in our code(e.g. Reack, jQuery, Leaflet, etc.)
        * Contains development tools that help build our applications (e.g. live-server, Parcel, Babel, ect.)

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
265. An Overview of Modules in JavaScript`);
/*==============================================================*/

/*

Modules
    * Reusable piece of code that encapsulates implementation details
    * Usually a standalone file, but it doesn't have to be
    * Compose software: Modules are small building blocks that we put together to build complex applications
    * Isolate components: Modules can be developed in isolation without thinking about the entire codebase
    * Abstract code: Implement low-level code in modules and import these abstractions into ther modules
    * Organized code: Modules naturally lead to a more organized codebase
    * Reuse code: Modules allow us to easily reuse the same code, even across multiple projects



Native JavaScript (ES6) Modules
    * Modules stored in files, exactly one module per file

                                        ES6                        Script
    * Top-level variables         Scoped to modules          Global
    * Default mode                Strict mode                "Sloppy" mode
    * Top-level 'this'            undefines                  window
    * Imports and exports         YES                        NO
        * Happens at top-level
        * mports are hoisted
    * HTML linking                <script type="module">     <script>
    * File downloading            Asynchronous               Synchronous
    


How ES6 Modules are Imported
    * Modules are imported synchronously
    * Possible thanks to top-level ("static") imports, which make imports known before execution
    * This makes bundling and dead code elimination possible

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
268. CommonJS Modules`);
/*==============================================================*/

/*

There are also other module systems, that have been used by JavaScript in the past. But again, they were not native JavaScript. So they relied on some external implementations. And two examples are:
    AMD Modules
    CommonJS modules.

And in fact, CommonJS modules, are worth taking a look at. Now CommonJS modules are important for us, because they have been used in Node.js, for almost all of its existence. So only very recently, ES Modules have actually been implemented, in Node.js.

Now the big consequence of this, is that almost all the modules, in the NPM repository,that we talked about in the beginning of this section, remember? So all these modules that we can use in our own code, still use the CommonJS module system. And the reason for that,is that NPM was originally only intended for 'node.js'. Which as they said, uses commonJS. Only later NPM became the standard repository, for the whole JavaScript world. And so now we are basically stuck, with CommonJS.

*/

/*

// node.js, this wont work on browser

// Export
export.addToCart = addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity}x ${product} added to cart`);
        console.log(`Shipping cost is £${shippingCost}`); // <<<=== this works because of 'closures'
};

// Import 
const { addToCart } = require('./shoppingCart.js);

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
269. A Brief Introduction to the Command Line`);
/*==============================================================*/

/*

This all depends on what terminal you're using:
    VSCode
        * PowerShell
        * Bash
        * ...



dir/ls
    dir - directory Windows
    ls - MacOS/Linux
cd - change sirectory
    'cd ..' or 'cd../..' - moves up in file directory
clear - empties Command Propmt

mkdir - make directory
rmdir - remove directory

'create new file'
    new-item - PowerShell
        new-item index.html, script.js
    edit - Command Line
    touch - MacOS
    code - VSCode - to open new file, but not saved
'delete file'
    remove-item - PowerShell
    rm - MacOS
    del - Command Line
'move file'
    move-item [file] [directory]
    mv - MacOS

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
270. Introduction to NPM`);
/*==============================================================*/

// NPM - Node Package Manager, Software on PC and Package Repository Online

/*

check if NPM is installed, in terminal:
    * npm -v
        IF 'error' download Node.js manually from nodejs.org
    * npm init
    * install something
        * npm install leaflet, you need bundler to import it, because its CommonJS
        * npm install lodash-es / npm i lodash-es

Re-Installing dependancies
    In the terminal
        /../[project directory]/ npm install

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
271. Bundling With Parcel and NPM Scripts`);
/*==============================================================*/

/*

Install Parcel with terminal, in projects directory
    npm install parcel --save-dev
    npx parcel index.html

    Parcel will create 'dist' folder that goes to final users

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
273. Modern, Clean and Declarative JavaScript Programming`);
/*==============================================================*/

/*

Review: Modern and Clean Code

    Readable Code
        * Write code so that others can understand it
        * Write code so that you can understand it in 1 year
        * Avoid too "clever" and overcomplicated solutions
        * Use descriptive variable names: what they contain
        * Use descriptive function names: what they do

    General
        * Use DRY principle (refactor your code)
        * Don't pollute global namespace, encapsulate instead
        * Don't use 'var'
        * Use strong type check (=== and !==)

    Functions
        * Generally, functions should do only one thing
        * Don't use more then 3 function parameters
        * Use default parameters whenever possible
        * Generally, return same data typo as received
        * Use arrow functions when they make code more readable

    OOP
        * Use ES6 classes
        * Encapsulate data and don't mutate it from outside the class
        * Implement method chaining
        * Do not use arrow functions as methods (in regular objects)

    Avoid Nested Code
        * Use earlt 'return' ( guard clauses)
        * Use ternary (conditional) or logical operators istead of 'if'
        * Use multiple 'if' instead of 'if/else if'
        * Avoid 'for' loops, use arroy methods instead: map, filter, reduce...
        * Avoid callback-based asynchronous APIs

    Asynchronous Code
        * Consume promises with 'async/await' for best readibility
        * Whenever possible, run promises in parallel (Prmise.all)
        * Handle errors and promise rejections


Imperative vs. Declarative Code

    Imperative
        * Programmer explains "HOW to do things"
        * We explain the computer every single step it has to follow to achieve a result
        * EXAMPLE: Step-by-step recipe for a cake
        
        const arr = [2, 4, 6, 8];
        const doubled = [];
        for (let i = 0; i < arr.length; i++)
            doubled[i] = arr[i] * 2;

    Declarative
        * Programmer tells "WHAT to do"
        * We simply describe the way the computer should achieve the result
        * the HOW (Step-by-step instructions) gets abstracted away
        * EXAMPLE: Description of a cake

        const arr = [2, 4, 6, 8];
        const doubled = arr.map(n => n * 2);


    Functional Programming
        * Declarative proramming paradigm
        * Based on the idea of writing software by combining many 'pure functions', avoiding 'side effects' and mutable data

        * Side Effects: Modifications (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, ect.)

        * Pure functions: Function without side effect. Does not depend on external variables. Given the same inputs, always returns the same outputs.

    Functional Programming Techniques
        * Try to avoid data mutations
        * Use built-in methods that don't produce side effects
        * Do data transformations with methods such as .map(), .filter(), .reduce()
        * Try to avoid side effects in functions: this is of course not always possible!

    Declarative Syntax
        * Use array and object destructuring
        * Use the spread operator (...)
        * Use the ternary (conditional) operator
        * Use template literals

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
274. Let's Fix Some Bad Code!`);
/*==============================================================*/

/*

Original Code
//////////////////////////////////////////////////////////////////

var sc = [
  { product: 'bread', quantity: 6 },
  { product: 'pizza', quantity: 2 },
  { product: 'milk', quantity: 4 },
  { product: 'water', quantity: 10 },
];

var allow = {
  lisbon: 5,
  others: 7,
};

var description = '';

var check = function (city) {
  if (sc.length > 0) {
    var allowed;
    if (city == 'lisbon') {
      allowed = allow.lisbon;
    } else {
      allowed = allow.others;
    }

    for (item of sc) {
      if (item.quantity > allowed) item.quantity = allowed;
    }
  }
};
check('lisbon');
console.log(sc);

var createDescription = function () {
  var first = sc[0];
  var p = first.product;
  var q = first.quantity;

  if (sc.length > 1) {
    description = 'Order with ' + q + ' ' + p + ', etc...';
  } else {
    description = 'Order with ' + q + ' ' + p + '.';
  }
};
createDescription();

console.log(description);

*/

const shoppingCart = [
    { product: 'bread', quantity: 6 },
    { product: 'pizza', quantity: 2 },
    { product: 'milk', quantity: 4 },
    { product: 'water', quantity: 10 },
];
const allowedProducts = {
    lisbon: 5,
    others: 7,
};

const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
    if (!cart.length) return [];

    // const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;
    const allowed = numAllowed?.[city] ?? allowedProducts.others;

    const newCart = cart.map((item) => {
        const { product, quantity } = item;
        return {
            product,
            quantity: quantity > allowed ? allowed : quantity,
        };
    });

    return newCart;
};
const allowedShoppingCart = checkCorrectAllowedProducts(shoppingCart, allowedProducts, 'lisbon');
console.log(allowedShoppingCart);

const createOrderDescription = function (cart) {
    const [{ product: p, quantity: q }] = cart;

    return `Order with ${q}x ${p}${cart.length > 1 ? ', etc...' : '.'}`;
};
const orderDescription = createOrderDescription(allowedShoppingCart);
console.log(orderDescription);
