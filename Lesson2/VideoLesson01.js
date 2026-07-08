const location1 = 3;
const location2 = 4;
const location3 = 5;

let isDestroyed = false;
let userHitGuess;
let numberOfHits=0;
while(!isDestroyed){
    userHitGuess = +prompt("Выберите ячейку от 1 до 6, чтобы сделать выстрел", 0);
    switch(userHitGuess){
        case 0:
        case 1:
        case 2:
        case 6:
        alert("You missed lol");
        break;
        case 3:
        case 4:
        case 5:
        numberOfHits+=1;
        alert("HIT!!");
        break;
    }
    if(numberOfHits===3){
        alert('gz you won!');
        isDestroyed=true;
    }
}