const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let numberOne = Number(readlineSync.question("\nEnter three numbers.\n"));
let numberTwo = Number(readlineSync.question(""))
let numberThree = Number(readlineSync.question(""))

if (Number.isNaN(numberOne || numberTwo || numberThree)) {
    console.log("Invalid");
} else if (numberOne < MIN || numberOne > MAX || numberTwo < MIN || numberTwo > MAX || numberThree < MIN || numberThree > MAX) {
    console.log("Invalid");
} else if (((numberOne - Math.floor(numberOne)) !==0) || ((numberTwo - Math.floor(numberTwo)) !==0) || ((numberThree - Math.floor(numberThree)) !==0)) {
    console.log("\nInvalid.");
} else if (numberOne < numberTwo && numberTwo < numberThree) {
    console.log("\nStrictly increasing.")
} else if (numberOne > numberTwo && numberTwo> numberThree) {
    console.log("\nStrictly decreasing.")
} else if (numberOne < numberTwo && numberTwo == numberThree || numberOne == numberTwo && numberTwo < numberThree) {
    console.log("\nIncreasing.")
} else if (numberOne == numberTwo && numberTwo > numberThree || numberOne > numberTwo && numberTwo == numberThree) {
    console.log("\nDecreasing.")
} else if (numberOne == numberTwo && numberTwo == numberThree) {
    console.log("\nEqual.")
} else {
    console.log("\nUnordered.")
}
