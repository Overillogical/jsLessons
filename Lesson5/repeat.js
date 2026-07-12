/* averageOfUnique(array) — она возвращает среднее арифметическое только уникальных чисел массива.
Пример: averageOfUnique([2, 2, 4, 6]) → среднее из [2, 4, 6] = 4.
Подумай про edge case: пустой массив (делить на 0 нельзя — реши, что вернуть).*/

function averageOfUnique(arr) {
    let average = 0;
    let uniqueArr = [];

    if (arr.length===0) {
        console.log('Empty array. error')
        return
    }
    OUTER : for (let number of arr) {
        for (let unnumber of uniqueArr) {
            if (number === unnumber) {
                continue OUTER
            }

        }
        uniqueArr.push(number)
    }
    for (let number of uniqueArr) {
        average += number;
    }


    return average / uniqueArr.length
}

console.log(averageOfUnique([2, 2, 4, 6]))

/*Дан объект game с resources (как в твоей addResource).
Напиши функцию totalResources(game), которая возвращает сумму всех значений внутри game.resources — не зная заранее, какие там ключи.
Для { gold: 250, lumber: 100 } вернёт 350.
Пройдись по ключам циклом for...in. Проверь на пустом resources: {} → 0.*/

const game = {
    resources:{
        gold:250,
        lumber:100
    }
}

function totalResource(game){
    let sum =0;
    for(let key in game.resources){
        sum+=game.resources[key];
    }
    return sum
}

console.log(totalResource(game))