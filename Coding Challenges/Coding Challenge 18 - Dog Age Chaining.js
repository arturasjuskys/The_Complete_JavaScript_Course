'use strict';

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!

Test data:
    Data 1: [5, 2, 4, 1, 15, 8, 3]
    Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function (ages) {
    // 1.
    const dogAgeInHumanYears = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));

    // 2.
    const adults = dogAgeInHumanYears.filter((age) => age >= 18);

    // 3.
    const averageAge = adults.reduce((acc, val) => (acc += val), 0) / adults.length;
    // 2 3   =>   (2+3)/2=2.5   ===   2/2+3/2=2.5
    const averageAgeAlt = adults.reduce((acc, val, i, arr) => acc + val / arr.length, 0);
    console.log(averageAgeAlt);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge2 = (ages) =>
    ages
        .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
        .filter((age, i, arr) => age >= 18)
        .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
