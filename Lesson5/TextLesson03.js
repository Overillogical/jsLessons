const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,
    health: {
        hygiene: 75,
        energy: 50,
        dental: 100,
        coat: 30,
        // могут быть и другие показатели
    },
    generateHealthReport() {
    console.log(`Отчет о здоровье ${this.name}:`)
    const health = this.health

    for (const key in health) {
        console.log(`${key}: ${health[key]}`)
    }
}
}

pet.generateHealthReport()
