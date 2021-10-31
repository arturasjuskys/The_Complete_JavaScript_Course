'use strict';

/*=============================================================================================================================================
console.log(`-----------------------------------------------------
JavaScript Fundamentals - Part 1`);
==============================================================



const country = 'United Kingdom';
const continent = 'Europe';
let population = 66;
console.log(country, continent, population); // United Kingdom Europe 66



let isIsland = true;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language); // boolean number string undefined



language = 'English';



console.log(population / 2); // 33
console.log(population + 1); // 67
console.log(population > 6); // true
console.log(population < 33) // false
let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description); // United Kingdom is in Europe, and its 66 million people speak English



description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;



if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
};



console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // '617'
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143



const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
if (numNeighbours === 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}




if (language === 'English' && population <= 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
};



switch (language) {
    case 'Chinese':
    case 'Mandarin':
        console.log(`MOST number of native speakers!`);
        break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers`);
        break;
    case 'English':
        console.log(`3rd place`);
        break;
    case 'Hindi':
        console.log(`Number 4`);
        break;
    case 'Arabic':
        console.log(`5th most spoken anguage`)
        break;
    default:
        console.log(`Great language to :D`);
}



population > 33 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`);

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);

*/

/*=============================================================================================================================================*/
console.log(`-----------------------------------------------------
JavaScript Fundamentals - Part 2`);
/*==============================================================*/

// Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million peopleand its capital city is ${capitalCity}`;
}
const uk = describeCountry('United Kingdom', 66, 'London');
const lt = describeCountry('Lithuania', 2.8, 'Vilnius');
const spain = describeCountry('Spain', 47, 'Madrid');
console.log(uk);
console.log(lt);
console.log(spain);

function percentageOfWorld(population) {
    return population / 79;
}
const populationChina = percentageOfWorld(1441);
const populationUK = percentageOfWorld(66);
const populationLT = percentageOfWorld(2.8);
const populationSpain = percentageOfWorld(47);
console.log(populationChina, populationUK, populationLT, populationSpain);

const percentageOfWorld2 = function (population) {
    return population / 79;
};
const popChina = percentageOfWorld2(1441);
const popUK = percentageOfWorld2(66);
const popLT = percentageOfWorld2(2.8);
const popSpain = percentageOfWorld2(47);
console.log(popChina, popUK, popLT, popSpain);

const percentageOfWorld3 = (population) => population / 79;
const popuChina = percentageOfWorld3(1441);
const popuUK = percentageOfWorld3(66);
const popuLT = percentageOfWorld3(2.8);
const popuSpain = percentageOfWorld3(47);
console.log(popuChina, popuUK, popuLT, popuSpain);

function describePopulation(country, population) {
    return `${country} has ${population} million people, whichis about ${percentageOfWorld3(
        population
    )}% of the world.`;
}
console.log(describePopulation('China', 1441));
console.log(describePopulation('UK', 66));
console.log(describePopulation('Lithuania', 3));

// Arrays

const populations = [1441, 66, 3, 47];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3]),
];
console.log(percentages);

const neighbours = ['Latvia', 'Belarus', 'Russia', 'Poland'];
neighbours.push('Utopia');
neighbours.pop();
neighbours[0] = 'Latvian Country';
neighbours[neighbours.indexOf('Russia')] = 'Russian Federation';
console.log(neighbours);
if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country');
}

// Objects

const myCountry = {
    country: 'Lithuania',
    language: 'Lithuanian',
    population: 2.8,
    capital: 'Vilnius',
    neighbours: ['Latvia', 'Belarus', 'Russia', 'Poland'],
    description: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${
                this.neighbours.length
            } neighbouring ${
                this.neighbours.length > 1 ? 'countries' : 'country'
            } and a capital called ${this.capital}.`
        );
    },
};

// Lithuania has 2.8 million Lithuanian-speaking people, 4 neighbouring contries and a capital called Vilnius.
console.log(
    `${myCountry.country} has ${myCountry.population} million ${
        myCountry.language
    }-speaking people, ${myCountry.neighbours.length} neighbouring ${
        myCountry.neighbours.length > 1 ? 'countries' : 'country'
    } and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
myCountry['population'] -= 2;

myCountry.description();

// Loops

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld(populations[i]));
}
console.log(populations);
console.log(percentages);
console.log(percentages2);

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let outer = 0; outer < listOfNeighbours.length; outer++) {
    for (let inner = 0; inner < listOfNeighbours[outer].length; inner++) {
        console.log(`${listOfNeighbours[outer][inner]}`);
    }
}

const percentages3 = [];
let counter = 0;
while (counter < populations.length) {
    percentages3.push(percentageOfWorld(populations[counter]));
    counter++;
}
console.log(percentages3);
