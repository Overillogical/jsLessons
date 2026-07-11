const car = {
    make: "Chevy",
    model: "Bel Air",
    year: "1968",
    color: "red",
    passengers: "2",
    convertible: false,
    mileage: 1020
}

const dog = {
    name: "fido",
    weight: 20.5,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'
}


const number = 27;
const newNumber = number; // Создастся 2 ячейки в памяти

const newDog = dog; // 2 переменные ссылаются на один и тот же обьект
newDog.weight=30;
console.log(newDog)
console.log(dog)