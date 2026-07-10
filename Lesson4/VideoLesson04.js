const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

// Bubble solution #0 score: 60
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60
// Bubbles tests: 36
// Highest bubble score: 69
// Solutions with highest score: #11, #18


function getScores(arr) {
    for (let i = 0; i < arr.length; i++){
        console.log(`Bubble solution #${i} score: ${arr[i]}`)
    }
}
function getSpecificScore(arr, index) {
    console.log(arr[index])
}
function getHighestScore(arr){
    let highest = arr[0]
    for (let i = 0;i<arr.length; i++)
    {
        if(arr[i]>highest){
            highest=arr[i]
        }
    }
    return highest
}

function getSolutionsWithHighestScores(arr){
    let solutionNumbers=[];
    for (let i = 0;i<arr.length; i++)
    {
        if(arr[i]===getHighestScore(arr)){
            solutionNumbers.push(i)
        }
    }
    return solutionNumbers
}
getScores(scores)
console.log(getHighestScore(scores))
console.log(getSolutionsWithHighestScores(scores))

