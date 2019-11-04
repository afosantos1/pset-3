const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\nEnder a year: "));

if (Number.isNaN(year)) {
    console.log("\nInvalid.");
  
} else if (year < MIN || year > MAX) {
    console.log("\nInvalid.");
  
} else if (year % 4 == 0){
    console.log("\n" + year + " is a leap year.");
  
} else {
    console.log("\n" + year + " is not a leap year.")
}
