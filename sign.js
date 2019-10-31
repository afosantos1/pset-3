 
const readlineSync = require("readline-sync");

 const number = Number(readlineSync.question("\nEnter a number: "));

if (number > 0){
  console.log("\nPositive.\n");
}
else if (number < 0){
  console.log("\nNegative.\n");
}
else if (number == 0){
  console.log("\nZero.\n");
}
else if (Number.isNaN(number)){
  console.log("\nInvalid.\n");
}
