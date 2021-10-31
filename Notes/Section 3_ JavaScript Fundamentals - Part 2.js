'use strict';



/*===============================================================================================================================================
                Section 3 JavaScript Fundamentals - Part 2
31. Section Intro
32. Activating Strict Mode
33. Functions
34. Function Declarations vs. Expressions
35. Arrow Functions
36. Functions Calling Other Functions
37. Reviewing Functions
38. Coding Challenge #1
39. Introduction to Arrays
40. Basic Array Operations (Methods)
41. Coding Challenge #2
42. Introduction to Objects
43. Dot vs. Bracket Notation
44. Object Methods
45. Coding Challenge #3
46. Iteration: the for Loop
47. Looping Arrays, Breaking and Continuing
48. Looping Backwards and Looping in Loops
49. The while Loop
50. Coding Challenge #4
================================================================*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
34. Function Declarations vs. Expressions`);
/*==============================================================*/



// Function Declaration - can be called in the code before they are defined
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;
};

// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2); // 46 46



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
35. Arrow Functions`);
/*==============================================================*/



// variable = (parameter => function body);
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46


/*
    variable = (parameter => {
        function body
        return
    });
*/
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
};
console.log(yearsUntilRetirement(1991)); // 19



/*
    variable = ((parameters) => {
        function body
        return
    });
*/
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};
console.log(yearsUntilRetirement2(1990, 'Me'));
console.log(yearsUntilRetirement2(1991, 'Jonas'));



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
36. Functions Calling Other Functions`);
/*==============================================================*/



function cutFruitPieces(fruit) {
    return fruit * 4;
};
function fruitProcessor36(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
};
console.log(fruitProcessor36(2, 3));



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
39. Introduction to Arrays`);
/*==============================================================*/



const friends = ['Michel', 1991, 'Steve', 1984];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // 'Michel'
console.log(friends[2]); // 'Steve'
console.log(friends[friends.length - 1]); // 1984



friends[2] = 'Jane';
console.log(friends);



const firstName39 = 'Jonas';
const jonas = [firstName39, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas); // ["Jonas", "Schmedtmann", 46, "teacher", ["Michel", 1991, "Jane", 1984]]



const years39 = [1990, 1967, 2002, 2010, 2018];
const calcAges39 = function (birthYear) {
    return 2037 - birthYear;
};
const ages = [calcAges39(years39[0]), calcAges39(years39[1]), calcAges39(years39[years39.length - 1])];
console.log(ages); // [47, 70, 19]



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
40. Basic Array Operations (Methods)`);
/*==============================================================*/



const friends40 = [
    'Michel',
    'Steven',
    'Peter'
];



// .push() - adds element to the end, returns new array length
const newLength = friends40.push('Jane');
console.log(friends40); // ["Michel", "Steven", "Peter", "Jane"]
console.log(newLength); // 4

//.unshift() - adds element to the front, returns new array length
friends40.unshift('John');
console.log(friends40); // ["John", "Michel", "Steven", "Peter", "Jane"]



// .pop() - removes last item, returns removed element
const popped = friends40.pop();
console.log(popped); // 'Jane'
console.log(friends40); // ["John", "Michel", "Steven", "Peter"]

// ..shift() - removes first element, returns element removed
friends40.shift();
console.log(friends40); // ["Michel", "Steven", "Peter"]



// .indexOf()
console.log(friends40.indexOf('Steven')); // 1
console.log(friends40.indexOf('Bob')); // -1

// .includes()
console.log(friends40.includes('Steven')); // true
console.log(friends40.includes('Bob')); // false
if (friends40.includes('Steven')) {
    console.log(`You have a friend called Steven`);
}; // You have a friend called Steven



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
42. Introduction to Objects`);
/*==============================================================*/



const jonas42 = {
    key: 'valuePair',
    property: 'value',
    firstName: 'Jonas',
    lastName: 'Schmedtamnn',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michel', 'Steven', 'Peter'],
    anotherObject: {
        key: 'value',
        property: 'value'
    }
};
console.log(jonas42);



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
43. Dot vs. Bracket Notation`);
/*==============================================================*/



console.log(jonas42.lastName); // Schmedtamnn
console.log(jonas42.anotherObject.key); // value

console.log(jonas42['lastName']); // Schmedtamnn

const nameKey = 'Name';
console.log(jonas42['first' + nameKey]); // Jonas
console.log(jonas42['last' + nameKey]); // Schmedtamnn



/*
    Retrieve info with computed value

const interestedIn = prompt(`What do you want to know about Jonas?
firstName,
lastName,
age,
job,
friends`);
if (jonas42[interestedIn]) {
    console.log(jonas42[interestedIn]);
} else {
    console.log(`Wrong request!`);
};
*/



// add data
jonas42.location = 'Portugal';
jonas42['twitter'] = '@jonasschedtman';
console.log(jonas42);



// Challenge
// Jonas has 3 friends, and his best friend is called Michel
console.log(`${jonas42.firstName} has ${jonas42.friends.length} friends, and his best friend is called ${jonas42.friends[0]}`);



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
44. Object Methods`);
/*==============================================================*/



const jonas44 = {
    firstName: 'Jonas',
    lastName: 'Schmedtamnn',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michel', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function (birthYear) {
        return 2037 - birthYear;
    },
    calcAge2: function () {
        return 2037 - this.birthYear;
    },
    // this will store a new property inside the object
    calcAge3: function () {
        return this.age = 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge3()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};
console.log(jonas44.calcAge(1991)) // 46    <<<=== because function is wihout .this keyword
console.log(jonas44.calcAge(jonas44.birthYear)); // 46
console.log(jonas44.calcAge2()); // 46

// this will calculate the value and save it the object and then just display it three more times to save computational time.
console.log(jonas44.calcAge3());
console.log(jonas44.age);
console.log(jonas44.age);
console.log(jonas44.age);



// Challenge
// Jonas is a 46-years old teacher, and he has (a/no) driver's license
console.log(jonas44.getSummary());



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
46. Introduction: The for Loop`);
/*==============================================================*/



for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}.`);
};



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
47. Looping Arrays, Breaking and Continuing`);
/*==============================================================*/



const jonasArray47 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Steven']
];

const jonasArray47Typeof = [];
const jonasArray47Typeof2 = [];
for (let i = 0; i < jonasArray47.length; i++) {
    // reading from Array
    console.log(jonasArray47[i], typeof jonasArray47[i]);
    // writing to Array
    jonasArray47Typeof.push(typeof jonasArray47[i]);
    jonasArray47Typeof2[i] = typeof jonasArray47[i];
};
console.log(' ');
console.log(jonasArray47Typeof);
console.log(' ');
console.log(jonasArray47Typeof2);



const years47 = [1991, 2007, 1969, 2020];
const ages47 = [];
for (let i = 0; i < years47.length; i++) {
    ages47.push(2037 - years47[i]);
};
console.log(ages47);



// continue & break

console.log('...Only Strings...');
for (let i = 0; i < jonasArray47.length; i++) {
    if (typeof jonasArray47[i] !== 'string') continue;
    console.log(jonasArray47[i] + ' typeof: ' + typeof jonasArray47[i]);
};
console.log('...Break With Numbers...');
for (let i = 0; i < jonasArray47.length; i++) {
    if (typeof jonasArray47[i] === 'number') break;
    console.log(jonasArray47[i] + ' typeof: ' + typeof jonasArray47[i]);
};



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
48. Looping Backwards and Loops in Loops`);
/*==============================================================*/



// Looping Backwards
const jonasArray48 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michel', 'Peter', 'Steven']
];
for (let i = jonasArray48.length - 1; i >= 0; i--) {
    console.log(i, jonasArray48[i]);
};



// Loop Inside Loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------------- Start of Exercise ${exercise} ----------------`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Starting Exercise ${exercise}: Lifting weight for ${rep} time.`);
    };
};



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
49. The while Loop`);
/*==============================================================*/



// for loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`for: Lifting weights repetition ${rep}.`);
};

// while loop
let rep = 1;
while (rep <= 10) {
    console.log(`while: Lifting weights repetition ${rep}.`);
    rep++;
};



// Roll random number untill you roll 6.
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
};


