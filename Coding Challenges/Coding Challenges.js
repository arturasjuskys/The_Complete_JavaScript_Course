'use strict';

console.log('#1 ----------------------------------------------------');

const mark = {
    weight1: 78,
    weight2: 95,
    height1: 1.69,
    height2: 1.88,
};
const john = {
    weight1: 92,
    weight2: 85,
    height1: 1.95,
    height2: 1.76,
};
const bmi = (weight, height) => weight / height ** 2;
mark.bmi1 = bmi(mark.weight1, mark.height1);
mark.bmi2 = bmi(mark.weight2, mark.height2);
john.bmi1 = bmi(john.weight1, john.height1);
john.bmi2 = bmi(john.weight2, john.height2);
const markHigherBMI = mark.bmi1 > john.bmi1;

console.log(mark, john);
console.log(markHigherBMI);

console.log('#2 ----------------------------------------------------');

if (mark.bmi1 > john.bmi1) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

console.log(
    `Mark's BMI (${Math.trunc(mark.bmi1)}) is ${
        mark.bmi1 > john.bmi1 ? 'higher' : 'lower'
    } than John's (${Math.trunc(john.bmi1)})`
);

console.log('#3 ----------------------------------------------------');

const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];

// 1.
const average1 = dolphins.reduce((acc, val, _, arr) => acc + val, 0) / dolphins.length;
const average2 = koalas.reduce((acc, val, _, arr) => acc + val, 0) / koalas.length;
console.log(average1);

// 2.
if (average1 > average2) {
    console.log(`Dolphins won`);
} else if (average1 < average2) {
    console.log('Koalas won');
} else {
    console.log('Its a draw');
}


console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
console.log('#1 ----------------------------------------------------');
