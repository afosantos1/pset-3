const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER_VALUE = 0.25;
const DIME_VALUE = 0.1;
const NICKEL_VALUE = 0.05;
const PENNY_VALUE = 0.01;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

if (Number.isNaN(amount)) {
    console.log("\nInvalid");
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.");
} else {
    // write your code for making change here
    while (amount/QUARTER_VALUE >= 1 ){
      quarters = Math.floor(amount/QUARTER_VALUE);
      amount = amount % QUARTER_VALUE;
    }
    while (amount/DIME_VALUE >= 1){
      dimes = Math.floor(amount/DIME_VALUE);
      amount = amount % DIME_VALUE;
    }
    while (amount/NICKEL_VALUE >= 1){
      nickels = Math.floor(amount/NICKEL_VALUE);
      amount = amount % NICKEL_VALUE;
    }
    while (amount/PENNY_VALUE >= 1){
      pennies = Math.floor(amount/PENNY_VALUE);
      amount = amount % PENNY_VALUE;
    }
    console.log(`\n${quarters} quarters. ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`);

}
