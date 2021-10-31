


/*===============================================================================================================================================
                Section 2: JavaScript Fundamentals - Part 1
 6. Section Intro
 7. Hello World!
 8. A Brief Introduction to JavaScript
 9. Linking a JavaScript File
10. Values and Variables
11. Practice Assignments
12. Data Types
13. let, const and var
14. Basic Operators
15. Operator Precedence
16. Coding Challenge #1
17. Strings and Template Literals
18. Taking Decisions: if / else Statements
19. Coding Challenge #2
20. Type Conversion and Coercion
21. Truthy and Falsy Values
22. Equality Operators: == vs. ===
23. Boolean Logic
24. Logical Operators
25. Coding Challenge #3
26. The switch Statement
27. Statements and Expressions
28. The Conditional (Ternary) Operator
29. Coding Challenge #4
30. JavaScript Releases: ES5, ES6+ and ESNext
================================================================*/



/*=============================================================================================================================================*/
console.log('--------------------------------------------------');
console.log('12. Data Types');
/*==============================================================*/



/*
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol (ES2015)
7. BigInt (ES2020)
*/



let javascriptIsFun;
console.log(typeof 23); // number
console.log(typeof 'Jonas'); // string
console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // undefined



/*=============================================================================================================================================*/
console.log('--------------------------------------------------');
console.log('13. let, const and var');
/*==============================================================*/



/*
    const - default variable declaration
    let - use it just when sure that the value is noing to bechanged in the app
    var - legacy
*/



/*=============================================================================================================================================*/
console.log('--------------------------------------------------');
console.log('14. Basic Operators');
/*==============================================================*/



// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3); // 2 ** 3 = 2 * 2 * 2



// Addignment Operators
let x = 10 + 5; // 15
x += 10; // 25
x *= 4; // 100
x /= 4; // 25
x++; // 26
x--; // 25
console.log(x);



// Comparison Operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true



/*=============================================================================================================================================*/
console.log('--------------------------------------------------');
console.log('15. Operator Precedence');
/*==============================================================*/



// Mozilla Developer Network - table
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence



/*=============================================================================================================================================*/
console.log('--------------------------------------------------');
console.log('17. Strings and Template Literals');
/*==============================================================*/



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew); //I'm Jonas, a 46 years old teacher!

console.log(`Just a regular string...`); // Just a regular string...

console.log('String with \n\
multiple\n\
lines'); // This method works just because there is a bug in the language

console.log(`string with
multiple
lines`);



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
18. Taking Decisions: if / else Statements`);
/*==============================================================*/



const age = 15;

// Controll Structure
if (age >= 18) {
    console.log(`Sarah can start driving license`)
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years :)`);
};



const birthYear18 = 1991;
let century;
if (birthYear18 <= 2000) {
    century = 20;
} else {
    century = 21;
};
console.log(century);



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
20. Type Conversion and Coercion`);
/*==============================================================*/



// Number Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(Number('Jonas')); // NaN
console.log(Number(inputYear) + 18); // 2009



// String Conversion
console.log(23, String(23)); // 23 "23"



// Type Coercion
console.log("I'm " + 23 + 'years old')
console.log('23' - '10' - 3); // 10
console.log('23' + '10' + 3); // 23103
console.log('23' * '2') // 46
console.log('23' / '2') // 11.5
console.log('23' > '18'); // '23' > '18' => 23 > 18 => true



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
21. Truthy and Falsy Values`);
/*==============================================================*/



/*
    Falsy Values:
        0
        ''
        undefined
        null
        NaN
        fasle
*/



console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true



const money = 0;
if (money) {
    console.log(`Don't spend it all :)`);
} else {
    console.log(`You should get a job!`);
}



let height;
if (height) {
    console.log(`Yay! Height is defined`);
} else {
    console.log(`Height is UNDEFINED`);
}



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
22. Equality Operators: == vs. ===`);
/*==============================================================*/



const age22 = 18;
if (age22 === 18) console.log(`You just become an adult`);

console.log('18' == 18); // true
console.log('18' === 18); // false
console.log('18' !== 18); // true
console.log('18' != 18); // false



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
24. Logical Operators`);
/*==============================================================*/



console.log(true && true); // true
console.log(true || false); // true
console.log(!true); // false



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
26. The switch Statement`);
/*==============================================================*/



const day = 'saturday';
switch (day) {
    case 'monday': // day === 'monday'
        console.log(`Plan couse structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`)
};

if (day === 'monday') {
    console.log(`Plan couse structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day!`)
};



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
27. Statements and Expressions`);
/*==============================================================*/



/*
    Expression
        Any piece of code that produces a VALUE
    
    3 + 4
    1991
    true && false && !false

    Statement
        Is any bigger piece of code that DONT produce a VALUE
    
    if (23 > 10) {
        const str = '23 is bigger'
    }

*/



/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
28. The Conditional (Ternary) Operator`);
/*==============================================================*/



const age28 = 23;

// ( boolean ) ? ( if ) : ( else );
age28 >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`)



let drink2;
if (age28 >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
};
console.log(drink2);

const drink = age28 >= 18 ? 'wine' : 'water';
console.log(drink);



console.log(`I like to drink ${age28 >= 18 ? 'wine' : 'water'}`);


