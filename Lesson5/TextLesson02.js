const pet = {
    name: 'Strider',
    happiness: 50,
    hunger: 50,

    sayHi() {
        console.log('Meow!')
    },
    checkStatus() {
        console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`)
    },
    feedPet(foodQuantity) {
        this.hunger -= foodQuantity

        if (this.hunger < 0) {
            this.hunger = 0;
        }

        console.log(`Питомец покормлен! Текущий голод: ${this.hunger}`)
    }
}

pet.checkStatus()
pet.feedPet(150)
pet.sayHi()