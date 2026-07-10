/* Напиши функцию findLargestOfFour(a, b, c, d) — максимум из четырёх чисел, но с ограничением: не используй Math.max.
*/

function findLargestOfFour(a,b,c,d){
    let largestNumber = a;
    if (largestNumber<b){
        largestNumber=b;
    }
    if(largestNumber<c){
        largestNumber=c;
    }
    if(largestNumber<d){
        largestNumber=d;
    }
    return largestNumber
}

console.log(findLargestOfFour(4,2,3,6));