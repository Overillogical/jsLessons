const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
const words3 = ["морковку", "макароны", "косточку"];

function randomPhraseGeneration(ar1, ar2, ar3) {
    console.log(getRandomElement(ar1) + ' ' + getRandomElement(ar2) + ' '
        + getRandomElement(ar3));
}

randomPhraseGeneration(words1, words2, words3)

function getRandomElement(array){
    return array[Math.floor(Math.random()*array.length)]
}