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


console.log(dog)

for(let key in dog){
    console.log(`${key}: ${dog[key]}`)
}

console.log(dog['name']);
console.log(dog.name)

dog.isdog = true;
console.log(dog)

delete dog.isdog
console.log(dog)