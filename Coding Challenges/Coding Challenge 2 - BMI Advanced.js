


/*=============================================================================================================================================*/
console.log(`Coding Challenge 2 - BMI Advanced
-----------------------------------------------------

`);



/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
    1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
    2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement
*/



const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}


