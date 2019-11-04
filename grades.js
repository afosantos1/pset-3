const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = 100;

const grade = Number(readlineSync.question("\nEnder a grade: "));

if (Number.isNaN(grade)) {
    console.log("\nInvalid.");
  
} else if (grade < MIN || grade > MAX) {
    console.log("\nInvalid.");
  
} else {
    if (grade >= 0 && grade < 60) {
      letterGrade = "F";
      run= true;
      
    } else if (grade >= 60 && grade < 70) {
      letterGrade = "D";
      run= true;
      
    } else if (grade >= 70 && grade < 80) {
      letterGrade = "C";
      run= true;
      
    } else if (grade >= 80 && grade < 90) {
      letterGrade = "B";
      run= true;
      
    } else if (grade >= 90 && grade <= 100) {
      letterGrade = "A";
      run= true;
      
    } else {
      console.log("\nInvalid.");
      run = false;
      
    }

    if (run == true) {
      console.log("\nYou recieved a(n) " + letterGrade +  ".");
    }
}
