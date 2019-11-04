const readlineSync = require("readline-sync");
const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "));

if (temp >= 32 && scale == "F")  {
	console.log("\nLiquid.\n");
}
else if (temp >= 212 && scale == "F" )  {
	console.log("\nGas.\n");
}
else if (temp <= 32 && scale == "F" )  {
	console.log("\nSolid.\n");
}
if (temp >= 273 && scale == "K")  {
	console.log("\nLiquid.\n");
}
else if (temp >= 373 && scale == "K" )  {
	console.log("\nGas.\n");
}
else if (temp <= 273 && scale == "K" )  {
	console.log("\nSolid.\n");
}
if (temp >= 0 && scale == "C")  {
	console.log("\nLiquid.\n");
}
else if (temp >= 100 && scale == "C" )  {
	console.log("\nGas.\n");
}
else if (temp <= 0 && scale == "C" )  {
	console.log("\nSolid.\n");
}
else if (Number.isNaN(temp)){
  console.log("\nInvalid.\n");
