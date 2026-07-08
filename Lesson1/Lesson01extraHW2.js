/*Угадайка. const secret = 42.
В цикле while спрашивай число через prompt, пока не угадает.
После каждой попытки — console.log с подсказкой «больше» или «меньше», в конце — число попыток. */


const secret = 42;
let numberOfTries =1;
let inputNumber = +prompt("Введите число, в попытке угадать загаданное")

while(inputNumber!==secret){
    if(inputNumber>secret){
        inputNumber = +prompt("Неверно! Попробуйте число поменьше")

    }else
    {
        inputNumber= +prompt("Неверное! Попробуйте число побольше")

    }
    numberOfTries+=1;
}
alert(`Поздравляем! Вы угадали число ${secret} за ${numberOfTries} попыток`)