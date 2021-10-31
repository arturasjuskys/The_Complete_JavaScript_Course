'use strict';



/*
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
    1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names
    4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In  this game, it will look like this:
        {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
}
*/



const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};



// 1.
for (const [goal, player] of game.scored.entries()) console.log(`Goal ${goal + 1}: ${player}`);
// Goal 1: Lewandowski
// Goal 2: Gnarby
// Goal 3: Lewandowski
// Goal 4: Hummels



// 2.
const average = Object.values(game.odds);
let sum = 0;
for (const num of average) sum += num;
console.log(sum / average.length);
// 3.6933333333333334



// 3.
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of victory draw: ${game.odds.team1}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
// Odd of victory Bayern Munich: 1.33
// Odd of victory draw: 1.33
// Odd of victory Borrussia Dortmund: 6.5

// Alternative
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
};
// Odd of victory Bayern Munich: 1.33
// Odd of victory draw: 1.33
// Odd of victory Borrussia Dortmund: 6.5



// 4.
const scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
};
console.log(scorers);
// {Lewandowski: 2, Gnarby: 1, Hummels: 1}


