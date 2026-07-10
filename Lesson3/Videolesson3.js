//deposit
const depositAmount = 500;
const yearlyRate = 15;
const depositTermInYears = 2;
//

function depositCalculator(depositAmount,yearlyRate,depositTermInYears){
    let depositIncome = 0;
    let count = 0;

    while (count < depositTermInYears) {
        depositIncome = depositIncome + depositAmount * yearlyRate / 100;
        count += 1;
    }
    return depositIncome
}

console.log(depositCalculator(1000,15,2))

