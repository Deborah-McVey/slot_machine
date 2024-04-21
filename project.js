// 1. deposit some money
// 2. determine number of lines to bet on
 // 3. collect a bet amount
// 4. spin the slot machine
// 5. check if use won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync") ();
/* function deposit() {
    return 1
} */

// const x = deposit()
const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ") // convert this string to a number
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } // run node project.js to test an invalid input
};

deposit();

// in terminal type node project.js, it will return Enter a deposit amount: 
// you can enter an amount here