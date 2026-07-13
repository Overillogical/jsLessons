/*
Практика: forEach, map, filter, sort и колбэки.

Решай задачи прямо под их условием. Не используй reduce, find, Set,
классы и другие темы, которые ещё не проходили.
*/

/*
1. forEach — корзина по категориям

Дан массив покупок. С помощью forEach собери объект categoryTotals:
ключ — категория, значение — итоговая стоимость товаров этой категории
(price * quantity).

Ожидаемые категории: food, books, tech.
*/
const purchasesForEach = [
    {name: 'Хлеб', category: 'food', price: 70, quantity: 2},
    {name: 'JavaScript Guide', category: 'books', price: 1200, quantity: 1},
    {name: 'Яблоки', category: 'food', price: 150, quantity: 3},
    {name: 'Мышь', category: 'tech', price: 1800, quantity: 1},
    {name: 'Clean Code', category: 'books', price: 900, quantity: 2},
]

const countCategoryTotals = (obj) => {
    const categoryTotals = {}
    obj.forEach((element) => {
        if (categoryTotals[element.category]>0) categoryTotals[element.category] += element.price * element.quantity
        else categoryTotals[element.category] = element.price * element.quantity
    })
    return categoryTotals
}

console.log(countCategoryTotals(purchasesForEach))

/*
2. forEach — проверка оценок

Дан массив студентов. Для каждого студента вычисли среднюю оценку и
выведи в консоль строку в формате:
"Имя: средняя оценка — зачёт" или "Имя: средняя оценка — незачёт".

Зачёт начинается с 60 баллов. Для обхода студентов используй forEach.
*/
const studentsForEach = [
    {name: 'Анна', scores: [59, 60]},
    {name: 'Борис', scores: [45, 60, 55]},
    {name: 'Вика', scores: [100, 90, 95]},
]


const checkPass = (arr)=>{
    arr.forEach((student)=>{
        let avgCount=0;
        for(let score of student.scores){
            avgCount+=score;
        }
        let avgScore = Math.floor(avgCount/student.scores.length)
        if(avgScore>=60) console.log(`Имя: ${student.name} средняя оценка ${avgScore} — зачёт`)
        else console.log(`Имя: ${student.name} средняя оценка ${avgScore} — незачёт`)
    })
}
checkPass(studentsForEach)

// Твоё решение №2:


/*
3. map — карточки пользователей

Создай новый массив строк из массива usersForMap.
Формат каждой строки: "Имя Фамилия — возраст лет".

Исходный массив менять нельзя.
*/
const usersForMap = [
    {firstName: 'Иван', lastName: 'Петров', age: 22},
    {firstName: 'Мария', lastName: 'Сидорова', age: 31},
    {firstName: 'Олег', lastName: 'Ким', age: 19},
]

const stringMap = (usersForMap.map((element)=> element.firstName+ " "+ element.lastName+ " - "+ element.age+ " лет."))

console.log(stringMap)
// Твоё решение №3:


/*
4. map — обновление цен

Создай новый массив объектов на основе productsForMap.
У каждого нового объекта должны остаться title, price и discount,
а также появиться finalPrice — цена после скидки.

Не меняй исходные объекты и не добавляй поле finalPrice в productsForMap.
*/
const productsForMap = [
    {title: 'Клавиатура', price: 5000, discount: 10},
    {title: 'Наушники', price: 8000, discount: 25},
    {title: 'Книга', price: 1000, discount: 0},
]
const mappedProducts = (productsForMap.map((product) =>( {'title': product.title, 'price': product.price, 'discount': product.discount, 'finalPrice': product.price-product.price*product.discount/100})))


console.log(mappedProducts)


// Твоё решение №4:



/*
5. filter — подходящие заказы

Оставь только оплаченные заказы, у которых total не меньше 1000
и itemsCount не меньше 2.
*/
const ordersForFilter = [
    {id: 101, total: 1200, status: 'paid', itemsCount: 2},
    {id: 102, total: 5000, status: 'new', itemsCount: 5},
    {id: 103, total: 900, status: 'paid', itemsCount: 3},
    {id: 104, total: 2500, status: 'paid', itemsCount: 1},
    {id: 105, total: 3400, status: 'paid', itemsCount: 4},
]

const paidOrders = ordersForFilter.filter((order)=>(order.status==='paid'&&order.total>=1000&&order.itemsCount>=2))

console.log(paidOrders)
// Твоё решение №5:


/*
6. filter — первые вхождения слов

Создай новый массив, в котором остаётся только первое появление каждого слова.
Регистр учитывать не нужно: "JS" и "js" считаются одним словом.

Можно использовать indexOf и toLowerCase внутри callback.
*/
const wordsForFilter = ['JS', 'js', 'Array', 'JS', 'map', 'array', 'MAP', 'filter']

// const filteredWords = wordsForFilter.filter(((word.toLowerCase())=>{
//     return filteredWords.indexOf(word.toLowerCase())===-1})

const filteredWords=wordsForFilter.filter(((word,index) =>{
    return wordsForFilter.indexOf(word.toLowerCase())===index
}))
console.log(filteredWords)

// Твоё решение №6:


/*
7. sort — таблица лидеров

Отсортируй playersForSort:
1) по score — от большего к меньшему;
2) если score одинаковый, по games — от меньшего к большему;
3) если равны и score, и games, по id — от меньшего к большему.

sort изменяет исходный массив. Реши сам, нужно ли тебе сохранять исходный порядок.
*/
const playersForSort = [
    {id: 3, name: 'Анна', score: 120, games: 8},
    {id: 1, name: 'Борис', score: 150, games: 12},
    {id: 4, name: 'Вика', score: 120, games: 6},
    {id: 2, name: 'Глеб', score: 150, games: 12},
    {id: 5, name: 'Дина', score: 150, games: 9},
]

playersForSort.sort((a,b)=>{
    if(a.score===b.score&&a.games===b.games){
        return a.id-b.id
    }else if(a.score===b.score&&a.games!==b.games){
        return a.games-b.games
    }
    return b.score-a.score
})
console.log(playersForSort)
// Твоё решение №7:


/*
8. sort — план задач

Отсортируй tasksForSort в таком порядке:
1) priority: high, затем medium, затем low;
2) внутри одного priority — по minutes от меньшего к большему.

Не используй готовые таблицы приоритета. Реши через условия в comparator.
*/
const tasksForSort = [
    {title: 'Исправить баг', priority: 'high', minutes: 45},
    {title: 'Ответить на письмо', priority: 'low', minutes: 10},
    {title: 'Написать тесты', priority: 'high', minutes: 25},
    {title: 'Обновить README', priority: 'medium', minutes: 15},
    {title: 'Рефакторинг', priority: 'medium', minutes: 60},
]
tasksForSort.sort((a,b)=>{
    if(a.priority===b.priority) return a.minutes-b.minutes
    else if(a.priority==='high') return -1
    else if(a.priority==='low') return 1
    else if(a.priority==='medium'&&b.priority==='high') return 1
    else return -1
})
console.log(tasksForSort)


// Твоё решение №8:


/*
9. Колбэки — свой some

Напиши функцию hasMatch(array, callback).
Она возвращает true, если callback вернул true хотя бы для одного элемента;
иначе возвращает false.

Важно: после первого подходящего элемента не продолжай цикл.
Проверь функцию на numbersForCallbacks и придумай ещё один тест с объектами.
*/
const numbersForCallbacks = [3, 7, 11, 14, 19]
const numbersForCallbacks2 = [3, 7, 11, 15, 19]
const numbersForCallbacks3 = [{}, {}]



const hasMatch= ((array,callback)=>{
    // array.forEach((element)=> {
    //     console.log(element)
    //     if (callback(element)) return true
    // })
    for (let element of array){
        if (callback(element)) return true
    }
    return false
})

const aboba = (number) => {
    console.log('Проверяю:', number)
    return number === 14
}
console.log(hasMatch(numbersForCallbacks,aboba))
console.log(hasMatch(numbersForCallbacks2,aboba))
console.log(hasMatch(numbersForCallbacks3,aboba))
// Твоё решение №9:


/*
10. Колбэки — поиск индекса

Напиши функцию findIndexBy(array, callback).
Она возвращает индекс первого элемента, для которого callback вернул true.
Если подходящего элемента нет, функция должна вернуть -1.

Проверь функцию на usersForCallbacks: найди пользователя по возрасту
и отдельно попробуй найти несуществующего пользователя.
*/
const usersForCallbacks = [
    {name: 'Ира', age: 17},
    {name: 'Кирилл', age: 24},
    {name: 'Лена', age: 30},
]
const findIndexBy = ((array,callback)=>{
    // for(let key in array){
    //     if (callback(array[key])) return key
    // }
    for(let i =0;i<array.length;i++){
         if (callback(array[i])) return i
    }
    return -1
})


const amogus = (user) => user.age >= 18
console.log(findIndexBy(usersForCallbacks,amogus))
console.log(findIndexBy([{name:'ivan',age :5}],amogus))
// Твоё решение №10:



