// let dogName = "rover";
// let dogWeight = 23;
// if (dogWeight > 20) {
//     console.log(`${dogName} says WOOF WOOF`)
// } else {
//     console.log(`${dogName} sais gaf`)
// }
// dogName = 'spot';
// dogWeight = 5;
// if (dogWeight > 20) {
//     console.log(`${dogName} says WOOF WOOF`)
// } else {
//     console.log(`${dogName} sais gaf`)
// }
// dogName = 'spike';
// dogWeight = 53;
// if (dogWeight > 20) {
//     console.log(`${dogName} says WOOF WOOF`)
// } else {
//     console.log(`${dogName} sais gaf`)
// }
// dogName = 'lady';
// dogWeight = 17;
// if (dogWeight > 20) {
//     console.log(`${dogName} says WOOF WOOF`)
// } else {
//     console.log(`${dogName} sais gaf`)
// }

function dogVoice(name, weight){
    const isHeavy = weight>20;
    if(isHeavy){
        console.log(`${name} sais WOOF WOOF`)
    }else{
        console.log(`${name} saif af af`)
    }
}

dogVoice('Betty',15)
dogVoice('Lady',5)
dogVoice('Spark',23)
