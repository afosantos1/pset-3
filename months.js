const readlineSync = require("readline-sync");
const month = String(readlineSync.question("\nEnter a month: "));

if (month == "jan")  {
 console.log("\n31 days.\n");
}
else if (month == "feb" )  {
 console.log("\n28 or 29 days.\n");
}
else if (month == "mar")  {
  console.log("\n31 days.\n");
}
else if (month == "apr")  {
 console.log("\n30 days.\n");
}
else if (month == "may")  {
 console.log("\n31 days.\n");
}
else if (month == "jun") {
	console.log("\n30 days")
}
else if (month == "jul")  {
 console.log("\n31 days.\n");
}
else if (month == "aug")  {
 console.log("\n31 days.\n");
}
else if (month == "sept")  {
 console.log("\n30 days.\n");
}
else if (month == "oct")  {
 console.log("\n31 days.\n");
}
else if (month == "nov")  {
 console.log("\n30 days.\n");
}
else if (month == "dec")  {
 console.log("\n31 days.\n");
}
else {
 console.log("\nInvalid.\n");
}
