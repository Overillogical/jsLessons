/*Сумма цифр без массивов.
    Пользователь вводит число,
    выведи сумму его цифр
(подсказка: % 10 даёт последнюю цифру, Math.floor(n / 10) отбрасывает её).*/

let inputNumber = +prompt("Введите число и я посчитаю сумму его цифр",0);
let  sum=0;
while (inputNumber>0){
    sum+=inputNumber%10;
    inputNumber= Math.floor(inputNumber/10);
}
alert(`Результат:  ${sum}`)