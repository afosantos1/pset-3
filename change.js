const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const VALUE_OF_QUARTERS = 0.25;
const VALUE_OF_DIMES = 0.1;
const VALUE_OF_NICKELS = 0.05;
const VALUE_OF_PENNY = 0.01;

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
    
    while (amount/VALUE_OF_QUARTERS >= 1 ){
      quarters = Math.floor(amount/VALUE_OF_QUARTERS);
      amount = amount % VALUE_OF_QUARTERS;
    }
    while (amount/VALUE_OF_DIMES >= 1){
      dimes = Math.floor(amount/VALUE_OF_DIMES);
      amount = amount % VALUE_OF_DIMES;
    }
    while (amount/VALUE_OF_NICKELS >= 1){
      nickels = Math.floor(amount/VALUE_OF_NICKELS);
      amount = amount % VALUE_OF_NICKELS;
    }
    while (amount/VALUE_OF_PENNY >= 1){
      pennies = Math.floor(amount/VALUE_OF_PENNY);
      amount = amount % VALUE_OF_PENNY;
    }
    console.log(`\n${quarters} quarters. ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.`);

}
