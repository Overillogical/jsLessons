const scores3 = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

const costs3 = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];


function calculateMostCostEfficient(score,cost){
    let mostCostEfficient = score[0];
    let efficiency = 0;
    let mostEfficientIndex
    for(let i =0;i<score.length;i++){
        if(score[i]/cost[i]>efficiency){
            mostCostEfficient=score[i];
            efficiency=score[i]/cost[i];
            mostEfficientIndex =i;
        }
    }
    console.log(`Bubble with number ${mostEfficientIndex}, with score ${score[mostEfficientIndex]} and efficency of ${efficiency}`)
    return mostCostEfficient
}

console.log(calculateMostCostEfficient(scores3,costs3))