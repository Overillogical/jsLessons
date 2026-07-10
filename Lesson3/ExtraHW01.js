/*Напиши функцию fizzbuzz(number), которая возвращает: строку "Fizz", если число делится на 3;
"Buzz", если делится на 5; "FizzBuzz", если делится и на 3, и на 5; и само число (как есть),
если ни на что не делится. Тонкость — в правильном порядке проверок: подумай, какое условие должно идти первым,
    чтобы 15 дал "FizzBuzz", а не "Fizz".*/


function fizzbuzz(number){
    const dividableByThree = number%3 ===0;
    const dividableByFive = number%5===0;
    if(dividableByThree){
        if(dividableByFive){
            return 'FizzBuzz'
        }
        return 'Fizz'
    }else if(dividableByFive){
        return 'Buzz'
    }
    return number
}
