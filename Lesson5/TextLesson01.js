// Дайте имя вашему виртуальному питомцу
let name = 'Strider'
// Состояние питомца
let happiness = 50
let hunger = 50

// Функция приветствиия
function sayHi () {
    console.log('Meow!')
}

// Функция для проверки состояния питомца
function checkStatus() {
    console.log(`Счастье: ${happiness}, Голод: ${hunger}`)
}

// Функция для кормления питомца
function feedPet(foodQuantity) {
    hunger -= foodQuantity // // то же самое, что и hunger = hunger - foodQuantity

    if (hunger < 0) {
        hunger = 0
    }
    console.log('Питомец покормлен!')
}

const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
}

// К свойствам объекта можно обратится с помощью точечной нотации
console.log(pet.hunger) // 50


pet.age = 2
console.log(pet)

delete pet.age
console.log(pet)

const property = 'name'
console.log(pet[property]) // Strider
console.log(pet.name) // Strider

let a = 10
let b = a  // Создается копия значения a
b = 20     // Изменение b не влияет на a
console.log(a)  // Выводит 10
console.log(b)  // Выводит 20

const obj1 = { value: 10 }
const obj2 = obj1  // obj2 ссылается на тот же объект, что и obj1
obj2.value = 20    // Изменения через obj2 видны через obj1
console.log(obj1.value)  // Выводит 20
console.log(obj2.value)  // Также выводит 20


const pet1 = {
    name: 'Strider',
    character: {
        kindness: 75,
    },
}

const pet2 = {
    name: 'Percival',
    character: pet1.character,
}

pet2.character.kindness = 100

console.log(pet1.character.kindness)
console.log(pet2.character.kindness)
