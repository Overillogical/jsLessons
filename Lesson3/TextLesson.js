// let gold = 100;
//
// let buildName= "Tower";
// let costGold= 30;
//
// if (gold>=costGold){
//     gold-=costGold;
//     console.log(`${buildName} work completed`)
// }else{
//     console.log(`${buildName} Not enough gold!`)
// }
let gold = 100;

function createBuilding(buildingName, costGold){
    const hasEnoughGold = gold>=costGold;

    if (hasEnoughGold) {
        gold -= costGold
        console.log(`${buildingName}: work complete!`)
    } else {
        console.log(`${buildingName}: not enough resources!`)
    }
}

createBuilding('Tower', 150);

function increaseGold(currentGold, increment=10){   // increment =10 придает дефолтное значение 10
    return currentGold + increment
}

gold = increaseGold(gold);
console.log(`New amount of gold = ${gold}`)

// Упражнение

let resource = 'lumber'

manageResources()

function manageResources() {
    let resource = 'crystals'
    if (true) {
        let resource = 'stone'
        console.log(resource) // Stone
    }
    console.log(resource) // Crystals
}

console.log(resource) // lumber

if (true) {
    resource = 'gold'
    console.log(resource) // gold
}
console.log(resource) // gold