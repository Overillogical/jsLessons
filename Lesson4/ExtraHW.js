// --- 1. Бегущая сумма (running sum) ---
// runningSum(numbers): новый массив, где каждый элемент — сумма всех предыдущих + текущий.
// runningSum([1, 2, 3, 4]) → [1, 3, 6, 10]
// Аргумент менять нельзя. Пустой массив → пустой массив.

function runningSum(ar){
    const newArray = [];
    let arraySum=0;
    for (let number of ar){
        arraySum+=number;
        newArray.push(arraySum);
    }
    return newArray
}
// --- 2. Свой indexOf, но все вхождения ---
// findAllIndexes(array, target): массив всех индексов, где встречается target.
// Не встречается → пустой массив.
// findAllIndexes([5, 3, 5, 1, 5], 5) → [0, 2, 4]
// Стандартный .indexOf не использовать — цикл сам.


function findAllIndexes(array,target){
    const newArray=[];
    for(let i =0;i<array.length;i++){
        if(array[i]===target) newArray.push(i)
    }
    return newArray
}

// --- 3. Разворот порядка слов ---
// reverseWords("hello world foo") → "foo world hello"
// Разворачиваем ПОРЯДОК слов, а не буквы. Слова разделены одним пробелом.
// .reverse() не использовать — разворот пиши сам через цикл.
function reverseWord(word){
    let spacePostion = 0;
    let newWord=[]
    for(let i=0;i<word.length;i++){
        if(word[i]===' '){
            for(let j =i;j<spacePostion/2;j--){
                newWord.push(word[i]);
            }
        }
    }
    return newWord
}

console.log(reverseWord('abc asd ddd'))


// --- 4. Второй максимум ---
// secondMax(numbers): второе по величине УНИКАЛЬНОЕ значение.
// secondMax([4, 1, 4, 3, 9, 9]) → 4   (максимум 9, второй уникальный — 4)
// Уникальных меньше двух → null. Одним проходом, без сортировки.

function secondMax(numbers){
    let firstMaximum = numbers[0];
    let secondMax=0;
    for (let number of numbers){
        if(number>secondMax){
            if(number>=firstMaximum){
                firstMaximum=number;
                continue
            }
            secondMax=number
        }


    }
    return secondMax
}

console.log(secondMax([9,9,4]))
// --- 5. Схлопывание дубликатов подряд ---
// compress([1, 1, 2, 3, 3, 3, 1]) → [1, 2, 3, 1]
// Убрать идущие ПОДРЯД одинаковые, оставив по одному.
// Последняя 1 остаётся — она не примыкает к первым.

function compress(ar){
    for(let i = 1;i<ar.length;i++){
        if(ar[i]===ar[i-1]){
            console.log(`if ${ar[i]}=== ${ar[i-1]}`)
            ar.splice(i,1)
            i--;
        }
    }
    return ar
}

console.log(compress([1, 1, 2, 3, 3, 3, 1]))
