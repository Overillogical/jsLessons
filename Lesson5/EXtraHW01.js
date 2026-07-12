/* =========================================================
   УРОК 09 — ОБЪЕКТЫ: 10 задач на повторение
   Пиши решение под каждым заданием. Проверяй себя console.log.
   Без готовых решений из интернета — сначала сам.
   ========================================================= */


/* ---------------------------------------------------------
   1. countProperties(obj) — разминка
   Верни количество собственных свойств объекта.
   Без Object.keys — через for..in.

   countProperties({ a: 1, b: 2, c: 3 })  // 3
   countProperties({})                     // 0
--------------------------------------------------------- */

function countProperties(obj) {
    let count = 0;
    for (let property in obj) count += 1;
    return count
}


/* ---------------------------------------------------------
   2. sumValues(obj)
   Верни сумму всех ЧИСЛОВЫХ значений.
   Нечисловые (строки, булевы) — игнорируй.

   sumValues({ gold: 250, lumber: 100, name: 'base' })  // 350
   sumValues({ x: 5, y: 5, active: true })              // 10
--------------------------------------------------------- */

function sumValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }

    }
    return sum
}

console.log(sumValues({gold: 250, lumber: 100, name: 'base'}))


/* ---------------------------------------------------------
   3. hasValue(obj, value)
   Верни true, если среди ЗНАЧЕНИЙ объекта есть value (не ключ!),
   иначе false.

   hasValue({ a: 1, b: 2 }, 2)    // true
   hasValue({ a: 1, b: 2 }, 'a')  // false
--------------------------------------------------------- */

function hasValue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return true
        }
    }
    return false
}

console.log(hasValue({a: 1, b: 2}, 'a'))


/* ---------------------------------------------------------
   4. invert(obj)  — Codewars-classic
   Верни НОВЫЙ объект, где ключи и значения поменялись местами.
   Исходный объект менять нельзя.

   invert({ a: 1, b: 2, c: 3 })         // { '1': 'a', '2': 'b', '3': 'c' }
   invert({ name: 'Strider', age: 2 })  // { Strider: 'name', '2': 'age' }
--------------------------------------------------------- */

function invert(obj) {
    const result = {}
    for (let key in obj) {
        result[obj[key]] = key;

    }
    return result
}


/* ---------------------------------------------------------
   5. mergeObjects(a, b)
   Верни НОВЫЙ объект — объединение a и b.
   При совпадении ключа побеждает значение из b.
   a и b менять нельзя (проверь через console.log после вызова).

   mergeObjects({ x: 1, y: 2 }, { y: 99, z: 3 })  // { x: 1, y: 99, z: 3 }
--------------------------------------------------------- */
function mergeObject(a, b) {
    const merged = {};
    for (let key in a) merged[key] = a[key];
    for (let key2 in b) merged[key2] = b[key2];
    return merged
}

console.log(mergeObject({x: 1, y: 2}, {y: 99, z: 3}))

/* ---------------------------------------------------------
   6. filterByValue(obj, min)
   Верни НОВЫЙ объект только со свойствами,
   у которых числовое значение >= min.

   filterByValue({ gold: 250, lumber: 100, stone: 40 }, 100)
   // { gold: 250, lumber: 100 }
--------------------------------------------------------- */
function filterByValue(obj, min) {
    const newObj = {}
    for (let key in obj) {
        if (typeof obj[key] === 'number')
            if (obj[key] >= min) newObj[key] = obj[key]
    }
    return newObj
}

console.log(filterByValue({ gold: 250, lumber: 100, stone: 40 }, 100))

/* ---------------------------------------------------------
   7. renameKey(obj, oldKey, newKey)
   Переименуй ключ, сохранив значение.
   Если oldKey нет — верни объект без изменений.
   Можно менять переданный объект.
   Подсказка: как «удалить» ключ, ты уже знаешь (было на видео-уроке).

   renameKey({ firstName: 'Alx', age: 25 }, 'firstName', 'name')
   // { name: 'Alx', age: 25 }
--------------------------------------------------------- */

function renameKey(obj,oldKey,newKey){

    if(obj[oldKey]===undefined) return obj
    let tempObj = obj[oldKey]
    delete obj[oldKey];
    obj[newKey] = tempObj
    return obj
}

console.log(renameKey({ firstName: 'Alx', age: 25 }, 'firstName', 'name'))


/* ---------------------------------------------------------
   8. wordCount(sentence)  — Codewars-classic
   На вход строка из слов через пробел.
   Верни объект { слово: сколько_раз_встретилось }.
   Подсказка: строку разбить на массив слов — sentence.split(' ').

   wordCount('a b a c b a')  // { a: 3, b: 2, c: 1 }
--------------------------------------------------------- */

function wordCount(sentence){
    const sentenceM = sentence.split(' ');
    const wordObj = {};
    for(let letter of sentenceM){
        if(wordObj[letter] === undefined) wordObj[letter] =0
        wordObj[letter]+=1;
    }
    return wordObj
}

console.log(wordCount('a b a c b a') )  // { a: 3, b: 2, c: 1 }



/* ---------------------------------------------------------
   9. winner(votes)
   На вход объект { кандидат: число_голосов }.
   Верни имя (ключ) с НАИБОЛЬШИМ значением.
   Гарантируется: минимум один ключ, победитель один.

   winner({ Alice: 5, Bob: 9, Carol: 2 })  // 'Bob'
--------------------------------------------------------- */

function winner(votes){
    let winnerVotes = -1;
    let winnerName;
    for(let key in votes){
        if(votes[key]>winnerVotes){
            winnerVotes=votes[key]
            winnerName=key;
        }
    }
    return winnerName
}

console.log(winner({ Alice: 5, Bob: 9, Carol: 2 }) )


/* ---------------------------------------------------------
   10. bankAccount — объект с методами и this (посложнее)
   Создай объект account со свойством balance: 0 и методами:
   - deposit(amount)  — прибавляет amount к балансу (через this)
   - withdraw(amount) — снимает amount, но ТОЛЬКО если хватает средств;
                        иначе печатает 'Недостаточно средств', баланс не меняет
   - getBalance()     — возвращает текущий баланс

   account.deposit(100)
   account.withdraw(30)
   account.getBalance()   // 70
   account.withdraw(1000) // печатает 'Недостаточно средств'
   account.getBalance()   // 70
--------------------------------------------------------- */

const account = {
    balance : 0,
    name : 'Ashley',
    deposit(amount){
        this.balance+=amount;
    },
    withdraw(amount){
        if(this.balance-amount<0) return console.log('Not enough  money')
        this.balance-=amount;
    },
    getBalance(){
        return this.balance
    }
}
account.deposit(100)
account.withdraw(30)
account.getBalance()   // 70
account.withdraw(1000) // печатает 'Недостаточно средств'
account.getBalance()   // 70



