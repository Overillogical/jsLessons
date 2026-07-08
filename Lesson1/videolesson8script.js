let sum = +prompt("Укажите стартовую сумму", 1000);
const percent = 15;
let yearsPassed = 0;
const depositTerm = +prompt("Укажите срок депозита", 10);
while (yearsPassed <= depositTerm) {
    yearsPassed += 1;
    sum += sum * percent / 100;
    document.write(`Years passed: ${yearsPassed}. And sum now is ${sum}` + "<br>")
}