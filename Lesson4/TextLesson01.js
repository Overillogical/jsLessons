function calculateAverage(scores) {
    let sum = 0 // Инициализируем переменную для суммы оценок

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i] // Добавляем каждую оценку к сумме
    }

    // Возвращаем средний балл округленный до ближайшего целого
    return Math.round(sum / scores.length)
}

const myScores = [82, 75, 91, 85, 93, 88, 99]

const average = calculateAverage(myScores)
console.log(`Средний балл студента: ${average}`) // Выведет средний балл


myScores.push(100);
console.log(myScores)


function classifyScores(scores) {
    const classifiedScores = []

    for (let i = 0; i < scores.length; i++) {
        let grade // Переменная для хранения оценки
        const score = scores[i]

        if (score >= 90) {
            grade = 'A'
        } else if (score >= 80) {
            grade = 'B'
        } else if (score >= 70) {
            grade = 'C'
        } else if (score >= 50) {
            grade = 'D'
        } else {
            grade = 'F'
        }

        classifiedScores.push(grade)
    }

    return classifiedScores
}



console.log(classifyScores(myScores))

/*1. Функция reverseArray
Напишите функцию reverseArray, которая принимает массив и возвращает новый массив, элементы которого расположены в обратном порядке.
В функции не должны использоваться методы массива, реализуйте её с помощью цикла for.

Входные данные: array: Массив, элементы которого нужно расположить в обратном порядке.
Выходные данные: Массив с элементами в обратном порядке.
После выполнения задания изучите метод массива reverse.*/

function reverseArray(array){
    let newArray = [];
    for (let i = array.length-1; i>=0;i--){
        newArray.push(array[i]);
    }
    return newArray
}
arrayForReversing = [1,2,3,4,4,4,4,4,5,6]
console.log(reverseArray(arrayForReversing))
//
// arrayForReversing.reverse();
// console.log(arrayForReversing) // Изначальный array изменился.

/*2. Функция removeElement
Напишите функцию removeElement, которая принимает массив и элемент, а затем возвращает новый массив без указанного элемента.
Для перебора элементов используйте цикл for.

Входные данные: array: Массив, из которого нужно удалить элемент. Массив может содержать любые типы данных.
element: Элемент, который нужно удалить из массива.
Выходные данные: Новый массив, который не содержит указанный элемент.*/


function removeElement(array,element){
    for (let i = 0;i<array.length;i++){
        if(array[i]===element){
            array.splice(i,1);
            i--;

        }
    }
    return array
}

console.log(removeElement(arrayForReversing,4))

