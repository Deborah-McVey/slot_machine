// 1. deposit some money
// 2. determine number of lines to bet on
 // 3. collect a bet amount
// 4. spin the slot machine
// 5. check if use won
// 6. give the user their winnings
// 7. play again

//step 1:

/* function deposit() {
    return 1
}

const x = deposit() */

const prompt = require("prompt-sync") ();

const deposit = () => {
    // infinite while loop until they enter a valid amount
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: "); // convert this string to a number
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again."); // run node project.js to test an invalid input
    } else {
        return numberDepositAmount;
    }
}
};

// const depositAmount = deposit(); // moved down
//console.log(depositAmount);

// in terminal type node project.js, it will return Enter a deposit amount: 
// you can enter an amount here

//step 2:
// copy/paste and change variables
const getNumberOfLines = () => {
     while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();