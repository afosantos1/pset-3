const readlineSync = require("readline-sync");

let nextStep = true;
let skipFinalStep = false;
let gpa = null;

const LETTER_GRADE = readlineSync.question("\nEnter a letter grade: ");

if ((LETTER_GRADE.length == 1) || (LETTER_GRADE.length == 2 && (LETTER_GRADE.charAt(1) == "+" || LETTER_GRADE.charAt(1) == "-"))) {

    let letterPrefix = LETTER_GRADE.charAt(0);

    switch (letterPrefix) {
        case "A":
        case "a":
            gpa = 4.00;
            nextStep = false;
            break;
        case "B":
        case "b":
            gpa = 3.00;
            break;
        case "C":
        case "c":
            gpa = 2.00;
            break;
        case "D":
        case "d":
            gpa = 1.00;
            break;
        case "F":
        case "f":
            gpa = 0.00
            nextStep = false;
            if (LETTER_GRADE.charAt(1) == "+" || LETTER_GRADE.charAt(1) == "-") {
                console.log("\nInvalid.");
                skipFinalStep = true;
            }
            break;
        default:
            console.log("\nInvalid.");
            nextStep = false;
            skipFinalStep = true;
            break;
    }

    if (nextStep == true) {
        if (LETTER_GRADE.charAt(1) == "+") {
            gpa += 0.33;
        }
        else if (LETTER_GRADE.charAt(1) == "-") {
            gpa -= 0.33;
        }
        else {

        }
    }
    else {

    }

    if (skipFinalStep == false) {
        let gpaTwoDecimals = gpa.toLocaleString("en", {minimumFractionDigits:2, maximumFractionDigits:2});
        console.log("\nYour GPA is " + gpaTwoDecimals + ".");
    }
    else {

    }

}
else {
    console.log("\nInvalid.");
}
