'use strict';

/*===============================================================================================================================================
                Section 9: Data Structures, Modern Operators and Strings
101. Section Intro
102. Section Roadmap
103. Destructuring Arrays
104. Destructuring Objects
105. The Spread Operator(...)
106. Rest Pattern and Parameters
107. Short Circuting (&& and ||)
108. THe Nullish Coalescing Operator (??)
109. Coding Challenge #1
110. Looping Arrays: The for-of Loop
111. Enhanced Object Literals
112. Optional Chaining (.?)
113. Looping Objects: Object Keys, Values, and Entries
114. Coding Challenge #2
115. Sets
116. Maps: Fundamentals
117. Maps: Iteration
118. Summary: Which Data Structure to Use?
119. Coding Challenge #3
120. Working with Strings - Part 1
121. Working with Strings - Part 2
122. Working with Strings - Part 3
123. Coding Challenge #4
================================================================*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
103. Destructuring Arrays`);
/*==============================================================*/

const restaurant103 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr103 = [2, 3, 4];
const a103 = arr103[0];
const b103 = arr103[1];
const c103 = arr103[2];

const [x, y, z] = arr103;
console.log(x, y, z); // 2 3 4
console.log(arr103); // [2, 3, 4]

const [first, second] = restaurant103.categories;
console.log(first, second); // Italian Pizzeria
let [main, , secondary] = restaurant103.categories;
console.log(main, secondary); // Italian Vegetarian

// Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary); // Vegetarian Italian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant103.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
// console.log(i, j); // 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
let [p, q, r] = [8, 9];
console.log(p, q, r); // 8, 9, undefined
[p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8, 9, 1

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
104. Destructuring Objects`);
/*==============================================================*/

const restaurant104 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
};

restaurant104.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
    // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22:30
});
restaurant104.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
    // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20:00
});

// Using original names
const { name, openingHours, categories } = restaurant104;
console.log(name, openingHours, categories); // Classico Italiano {thu: {…}, tri: {…}, sat: {…}} ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// Setting new names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant104;
console.log(restaurantName, hours, tags); // Classico Italiano {thu: {…}, tri: {…}, sat: {…}} ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant104;
console.log(menu, starters); // [] ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested objects
let { fri } = openingHours;
console.log(fri); // {open: 11, close: 23}
({
    fri: { open, close },
} = openingHours);
console.log(open, close); // 11 23

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
105. The Spread Operator (...)`);
/*==============================================================*/

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

// Add another Array to an Array
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

// unpack an Array - doesn't create new variables
console.log(...newArr); // 1 2 7 8 9

// Add an item to an Array
const newMenu = [...restaurant104.mainMenu, 'Gnocci'];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]

// Copy Array
const mainMenuCopy = [...restaurant104.mainMenu];

// Join 2 or more Arrays
const menu105 = [...restaurant104.mainMenu, ...restaurant104.starterMenu];
console.log(menu105); // ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Long Day!';
console.log(...str); // L o n g   D a y !
const letters = [...'Jonas', ' ', 'S.'];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S."]

const restaurant105 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};

// Real-world example
const ingedients = [
    // prompt(`Let's make pasta! Ingedient 1?`),
    // prompt(`Let's make pasta! Ingedient 2?`),
    // prompt(`Let's make pasta! Ingedient 3?`)
];
// Old way
// restaurant105.orderPasta(ingedients[0], ingedients[1], ingedients[2]);
restaurant105.orderPasta(...ingedients);

// Objects
const newRestaurant = {
    foundedIn: 1991,
    ...restaurant105,
    founder: 'Guiseppe',
};
console.log(newRestaurant);
// Copy object
const restaurantCopy = { ...restaurant105 };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant105.name); // Classico Italiano

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
106. Rest Pattern and Parameters`);
/*==============================================================*/

// Rest - is to pack seperate elements into an array

// ...DESTRUCTURING...

// Spread, because on RIGHT side of =
const arr106 = [1, 2, ...[3, 4]];

// Rest, because on LEFT side of =
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others); // 1 2 [3, 4, 5]

// Rest - will collect all the elements after last asignment, NO SKIPPED elements
const [pizza, , risotto, ...otherFood] = [...restaurant105.mainMenu, ...restaurant105.starterMenu];
console.log(pizza, risotto, otherFood); // Pizza Risotto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// Objects
const { sat, ...weekDays } = restaurant105.openingHours;
console.log(weekDays); // {thu: {…}, fri: {…}}

// ...FUNCTIONS...
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const g = [23, 5, 7];
add(...g); // 35

const restaurant106 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients);
    },
};

restaurant106.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms ["onion", "olives", "spinach"]
restaurant106.orderPizza('mushroom'); // mushroom []

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
107. Short Circuiting (&& and ||)`);
/*==============================================================*/

// Use ANY data type, return ANY data type, short-circuiting

// '||' -  'or' operator
// Short-circuiring - is to check the values for Truethy ones and return 1st thruethy value, IF NOT truethy values are present it will return last value
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// Ternary Operator - to check for existing value and setting default
const guest1 = restaurant106.numGuests ? restaurant106.numGuests : 10;
console.log(guest1);
// Short-circuiting to check for existing value and setting default
const guest2 = restaurant106.numGuests || 10;
console.log(guest2);

// '&&' - 'and' operator
// Short-circuiting - returns 1st Falsy value without finishing operation, if all values are Truethy returns last value
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

// if statement - check if the method exists, then call it
if (restaurant106.orderPizza) {
    restaurant106.orderPizza('mushroom', 'spinach'); // mushroom ["spinach"]
}
// short-circuiting - check if the method exists, then call it
restaurant106.orderPizza && restaurant106.orderPizza('mushrooms', 'spinach'); // mushroom ["spinach"]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
108. The Nullish Coalescing Operator (??)`);
/*==============================================================*/

// Nullish: null and undefined (NOT 0 or '')

// if value is 0/falsy - 0 error
restaurant106.numGuests = 0;
const guest3 = restaurant106.numGuests || 10;
console.log(guest3); // 10
// Nulling Coalescion operator - fix to 0 error
const guestCorrect = restaurant106.numGuests ?? 10;
console.log(guestCorrect); // 0

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
110. Looping Arrays: The for-of Loop`);
/*==============================================================*/

const menu110 = [...restaurant106.starterMenu, ...restaurant106.mainMenu];
console.log(menu110); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]
for (const item of menu110) console.log(item);
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

for (const item of menu110.entries()) console.log(item);
// [0, "Focaccia"]
// [1, "Bruschetta"]
// [2, "Garlic Bread"]
// [3, "Caprese Salad"]
// [4, "Pizza"]
// [5, "Pasta"]
// [6, "Risotto"]

for (const item of menu110.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

// Alternative
for (const [i, element] of menu110.entries()) {
    console.log(`${i + 1}: ${element}`);
}
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
111. Enhanced Object Literals`);
/*==============================================================*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const workHours = {
    // ES6 computing property names
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0,
        close: 12 + 12, // 24
    },
};
const shop = {
    name: 'Corner Shop',
    // ES6 enhanced object literal - no need to specify 'key: value' enough to specify just object name
    workHours,
    // ES6 enhanced method - enough just to specify name of method and method literal, NO need for ': function'
    printName() {
        console.log(this.name);
    },
};
console.log(shop);
shop.printName();

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
112. Optional Chaining (?.)`);
/*==============================================================*/

// OLD WAY
// Checking for a value in object
if (shop.workHours && shop.workHours.mon) console.log(shop.workHours.mon.open); // because if (false) - 'Nothing'
if (shop.workHours && shop.workHours.fri) console.log(shop.workHours.fri.open); // 11

// With optional chaining
// it checks for code before '?' if exists or not null or undefined and then returns 'open'
console.log(shop.workHours.mon?.open); // undefined
console.log(shop.workHours?.fri?.open); // 11

// Real-world Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = shop.workHours[day]?.open ?? 'closed';
    console.log(`On ${day}, ${open}`);
}
// On mon, closed
// On tue, closed
// On wed, closed
// On thu, 12
// On fri, 11
// On sat, 0
// On sun, closed

// Methods
console.log(shop.order?.(0, 1) ?? 'Method does not exist');

// Arrays - check if array is empty
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users2 = [];
console.log(users[0]?.name ?? 'User array empty'); // Jonas
console.log(users2[0]?.name ?? 'User array empty'); // User array empty

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
113. Looping Objects: Object Keys, Values, and Entries`);
/*==============================================================*/

// Property NAMES
const properties = Object.keys(workHours);
console.log(properties); // ["thu", "fri", "sat"]

let openStr = `We are open ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr); // We are open 3 days: thu, fri, sat,

// Property VALUES
const values = Object.values(workHours);
console.log(values);

// Property ENTRIES
const entries = Object.entries(workHours);
console.log(entries);

// Example
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sat we open at 0 and close at 24

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
115. Sets`);
/*==============================================================*/

/*
    Set - is a data structure to hold unique values, NOT ORDERED, can NOT retrieve data from it with its own method, unordered
*/

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}
console.log(new Set('Jonas')); // Set(5) {"J", "o", "n", "a", "s"}

// Set methods
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Garlic Bread"}
// ordersSet.clear();
// console.log(ordersSet); // Set(0) {}

for (const order of ordersSet) console.log(order);
// Pasta
// Pizza
// Garlic Bread

// Example - removing dublicates, to know how many different positions there is in the restaurant
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // (3) ["Waiter", "Chef", "Manager"]

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size); // 3
console.log(new Set('jonasschedtmann').size); // 11

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
116. Maps: Fundamentals`);
/*==============================================================*/

/*
    Maps - have 'key: value' pairs, but the difference from object is that 'key' can be any data type NOT just STRING.
*/

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are open

console.log(rest.has('categories')); // true
rest.delete(2);
console.log(rest); // Map(7) {"name" => "Classico Italiano", 1 => "Firenze, Italy", "categories" => Array(4), "open" => 11, "close" => 23, …}
console.log(rest.size); // 7
// rest.clear();
// console.log(rest); // Map(0) {}

// Using Object as a 'key'
const arr116 = [1, 2];
rest.set(arr116, 'Test');
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
117. Maps: Iteration`);
/*==============================================================*/

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again'],
]);
console.log(question);

// Convert OBJECT to MAP
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert MAP to ARRAY
console.log([...question]); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.entries()]); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log([...question.keys()]); // ["question", 1, 2, 3, "correct", true, false]
console.log([...question.values()]); // ["What is the best programming language in the world?", "C", "Java", "JavaScript", 3, "Correct", "Try again"]

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
118. Summary: Which Data Structure to Use?`);
/*==============================================================*/

/*
    Sources of DATA
        1. Fromn the program itself - Data written directly in source code (e.g. status message)
        2. From the UI - Data input from the user or  data written in DOM (e.g. tasks in todo app)
        3. From external source: Data fetched for example from web API (Application Programming Interface) (e.g. recipe object)
*/

/*
    Collection of data
*/

/*
    Data structure
*/

/*
    Simple List?

        Arrays
        Sets
*/

/*
    Key/Value Pairs?

        Objects
        Maps
*/

/*
    Built-In other Data types
        WeakMap
        WeakSet
    
    Non-Built in other Data types
        Stacks
        Queues
        Linked lists
        Trees
        Hash tables
*/

/*
    Arrays

        tasks = ['Code', 'Eat, 'Code'];
        // ["Code", "Eat", "Code"]

            # Use when you need ORDERED list of values (might contain duplicates)
            # Use when you need to MANIPOLATAE data



    Sets

        tasks = new Set(['Code', 'Eat, 'Code']);
        // {"Code", "Eat"}

            # Use when you need to work with UNIQUE values
            # Use when HIGH-PERFORMANCE is really important
            # Use to REMOVE DUPLICATES from arrays



    Objects

        task = {
            task: 'Code',
            date: 'today',
            repeat: true
        };

            # More "traditional" key/value store ("abused" objects)
            # Easier to write and access values with . and []

            # Use when you need to include FUNCTIONS (methods)
            # Use when working with JSON (can convert to map)



    Maps

        task = new Map([
            ['task', 'Code'],
            ['date', 'today'],
            [false, 'Start coding!']
        ]);

            # Better performance
            # Keys can have ANY data type
            # Easy to iterate
            # Easy to compute size

            # Use when you simply need to map key to values
            # Use when you need keys that NOT strings
*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
120. Working With Strings - Part 1`);
/*==============================================================*/

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log(plane[3]); // 0

console.log('B737'[0]); // b

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1, NOT faund

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat');
    } else {
        console.log('You got lucky');
    }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
121. Working With Strings - Part 2`);
/*==============================================================*/

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

const announcement = 'All passengers came to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // All passengers came to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); // All passengers came to boarding gate 23. Boarding gate 23!

// Booleans
let plane121 = 'A320neo';
console.log(plane121.includes('A320')); // true
console.log(plane121.includes('Boing')); // false
console.log(plane121.startsWith('A3')); // true

plane121 = 'Airbus A320neo';
if (plane121.startsWith('Airbus') && plane121.endsWith('neo')) console.log('Part of the NEW Airbus family');

// Example
const checkBaggage = function (items) {
    const baggage = items.toLocaleLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log("You're not allowed on board");
    } else {
        console.log('Wellcome aboard!');
    }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); // You're not allowed on board
checkBaggage('Socks and camera'); // Wellcome aboard!
checkBaggage('Got some snakcs and gun for protection'); // You're not allowed on board

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
122. Working With Strings - Part 3`);
/*==============================================================*/

// split & join

console.log('a+very_nice_string'.split('+')); // ["a", "very_nice_string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()];
console.log(newName.join(' ')); // Mr. Jonas SCHMEDTMANN

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis'); // Jessica Ann Smith Davis
capitalizeName('jonas schmedtmann'); // Jonas Schmedtmann

// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Jonas'.padStart(25, '+')); // ++++++++++++++++++++Jonas

console.log(message.padEnd(35, '+')); // Go to gate 23!+++++++++++++++++++++
console.log('Jonas'.padStart(25, '+').padEnd(35, '+')); // ++++++++++++++++++++Jonas++++++++++

// Example

const maskCreditCard = function (number) {
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(65435454)); // ****5454
console.log(maskCreditCard(65435468435454)); // **********5454
console.log(maskCreditCard('6543564537486784')); // ************6784

// Repeat

const message2 = 'Bad wather... All Departures Delayed... ';
console.log(message2.repeat(5)); // Bad wather... All Departures Delayed... Bad wather... All Departures Delayed... Bad wather... All Departures Delayed... Bad wather... All Departures Delayed... Bad wather... All Departures Delayed...

const planeInLine = function (n) {
    console.log(`There are ${n} planes in line ${'#'.repeat(n)}`);
};
planeInLine(5); // There are 5 planes in line #####
planeInLine(3); // There are 3 planes in line ###
planeInLine(12); //There are 12 planes in line ############
