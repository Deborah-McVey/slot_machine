// 1. deposit some money
// 2. determine number of lines to bet on
 // 3. collect a bet amount
// 4. spin the slot machine
// 5. check if user won
// 6. give the user their winnings
// 7. play again

//step 1:

/* function deposit() {
    return 1
}

const x = deposit() */

const prompt = require("prompt-sync") ();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8 
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
};

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
 
// step 3
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines)  {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
       // console.log(symbol, count);
       for (let i = 0; i < count; i++) {
        symbols.push(symbol);
       }
    }
    // console.log(symbols);
    // const reels = [[], [], []]; // each nested array is column
    const reels = [];
    for (let i = 0; 1 < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

//transpose a matrix (2D Array)
const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++)
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
        rows[i].push(reels[j][i]);
    }

    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of rows.entries()) {
            rowString += symbol
            if (i != rows.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString);
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break; //exit for loop, ititerating
            }
        }

        if (allSame) {
            winnings +=  bet * SYMBOL_VALUES[symbols[0]]
        }
    }
    return winnings;
};

//spin();
//const reels = spin();
//console.log(reels);
//spin(); 
// this was here to demonstrate looping showing our symbols in console log (see above)
const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString()); 

    if (balance <= 0) {
        console.log("You ran out of money!");
        break;
    }

    const playAgain = prompt("Do you want to play again (y/n)?");

    if (playAgain != "y") break;
    } 
};

game();