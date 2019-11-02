const readlineSync = require("readline-sync");

console.log("\nEnter three numbers. \n");
const numberOne = Number(readlineSync.question(""));
const numberTwo = Number(readlineSync.question(""));
const numberThree = Number(readlineSync.question(""));

if (Number.isNaN(numberOne) || Number.isNaN(numberTwo) || Number.isNaN(numberThree)) {
    console.log("\nInvalid.");
} else if (numberOne < Number.MIN_SAFE_INTEGER || numberOne > Number.MAX_SAFE_INTEGER || numberTwo < Number.MIN_SAFE_INTEGER || secondNumber > Number.MAX_SAFE_INTEGER || thirdNumber < Number.MIN_SAFE_INTEGER || thirdNumber > Number.MAX_SAFE_INTEGER) {
    console.log("\nInvalid.");
} else if (numberOne<numberTwo && numberTwo<numberThree) {
      console.log("\nStrictly increasing.")
    }
  else if (numberOne==numberTwo && numberTwo==numberThree) {
      console.log("\nEqual.")
    }
  else if (numberOne>numberTwo && numberTwo>numberThree) {
      console.log("\nStrictly decreasing.")
    }
  else if (numberOne<=numberTwo && numberTwo<=numberThree) {
      console.log("\nIncreasing.")
    }
  else if (numberOne>=numberTwo && numberTwo>=numberThree) {
      console.log("\nDecreasing.")
    }
  else {
      console.log("\nUnordered.")
    }
