/*В этом уроке мы создадим игру "Камень, Ножницы, Бумага" и заодно лучше познакомимся с логическими операторами, сравнением и ветвлением.

В этой игре компьютер случайным образом выбирает свой ход, а пользователь вводит свой ход через диалоговое окно.

Техническое задание:

Пользователь должен иметь возможность выбирать между камнем, ножницами и бумагой.
Игра должна определять победителя на основе классических правил игры.
Игра должна сообщать результат каждого раунда и завершаться, когда определён победитель.*/

let userChoice;
let computerChoice;
let isWinner = false;

// while(!isWinner){
//     userChoice = prompt("Выбери камень, ножницы или бумага");
//     userChoice = userChoice.toLowerCase();
//     let randomNumber = Math.floor(Math.random*3);
//     if (randomNumber === 0){
//         computerChoice = 'камень';
//     }else if (randomNumber===1){
//         computerChoice = 'ножницы';
//     }else{
//         computerChoice = 'бумага';
//     }
//
//     if (userChoice ==='камень' || userChoice ==='ножницы' || userChoice ==='бумага'){
//         if(userChoice === computerChoice){
//             alert("Ничья! Давай еще раз")
//         }else if (userChoice ==='камень' && computerChoice ==='ножницы' ||
//             userChoice ==='ножницы' && computerChoice ==='бумага' ||
//             userChoice ==='бумага' && computerChoice ==='камень'){
//             alert("Ты победил!");
//             isWinner= true;
//         }else{
//             alert("Ты проиграл :(");
//             isWinner = true;
//         }
//     }
//     else{
//         alert("Ваш ввод некорректен");
//     }
// }
// console.log(`Computer choice: ${computerChoice}\nUser choice: ${userChoice}`)


while(!isWinner){
    userChoice = prompt("Выбери камень, ножницы или бумага");
    userChoice = userChoice.toLowerCase();
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0 :
            computerChoice='камень';
            break;
        case 1 :
            computerChoice='ножницы';
            break;
        case 2:
            computerChoice ='бумага';
    }
    if (userChoice === computerChoice) {
        alert('Ничья, играем ещё раз!')
    } else {
        const isUserWinner =
            (userChoice === 'камень' && computerChoice === 'ножницы') ||
            (userChoice === 'ножницы' && computerChoice === 'бумага') ||
            (userChoice === 'бумага' && computerChoice === 'камень')

        const message = isUserWinner ? 'Ты победил!' : 'Ты проиграл!'
        alert(message)

        isWinner = true
    }
}