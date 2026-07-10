const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
const words3 = ["морковку", "макароны", "косточку"];

function randomPhraseGeneration(ar1, ar2, ar3) {
    console.log(ar1[Math.floor(Math.random() * ar1.length)] + ' ' + ar2[Math.floor(Math.random() * ar2.length)] + ' '
        + ar3[Math.floor(Math.random() * ar3.length)])
}

randomPhraseGeneration(words1, words2, words3)