const chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1968,
    color: "red",
    passengers: "2",
    convertible: false,
    mileage: 1020
}

const cadi = {
    make: "GM",
    model: "CAdilac",
    year: 1967,
    color: "white",
    passengers: "4",
    convertible: false,
    mileage: 1020
}

function prequal(car) {
    return car.mileage < 50000 && car.year > 1950;
}

prequal(chevy)
prequal(cadi)