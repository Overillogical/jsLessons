/*Напиши функцию countDigits(number), которая возвращает количество цифр в целом положительном числе (например, countDigits(3049) → 4).
Подумай, как это сделать без превращения в строку — через цикл и деление.
Учти краевой случай: countDigits(0) должно вернуть 1.*/


function countDigits(number){
    let digits = 0;
    if (number===0){
        return 1
    }
    while(number!=0){
        number = Math.floor(number/10)
        digits+=1;
    }
    return digits
}


console.log(countDigits(123))