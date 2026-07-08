/*
Вклад наоборот.
Пользователь вводит стартовую сумму, целевую сумму и процент.
Выведи, за сколько лет накопит.
Ловушка: что будет, если процент 0 или цель меньше старта? Сделай так, чтобы страница не зависла.
 */

let  startingSum = +prompt('Введите стартовую сумму',0);
const  targetSum = +prompt('Введите целевую сумму',0);
const  procent = +prompt('Введите под какой процент вклад',0);
let yearsToGetTotargetSum=0;

if(startingSum<=targetSum && procent>0){
    while(startingSum<targetSum){
        console.log(`Starting sum ${startingSum}, targetSum  ${targetSum}, procent ${procent}`)
        yearsToGetTotargetSum+=1;
        startingSum= startingSum+(startingSum*procent/100);
        console.log(startingSum);
        console.log(yearsToGetTotargetSum);
    }
    alert(`Вы накопите нужную сумму через ${yearsToGetTotargetSum} лет`)
}

else{
    alert('Check your inputs, something is wrong')
}

