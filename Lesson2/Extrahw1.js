/*Дано let age. Определить категорию:
    'ребёнок' (0–12), 'подросток' (13–17), 'взрослый' (18+).
    Отрицательный возраст — отдельная ветка с сообщением об ошибке.*/


let age = 15;
let category;

if (age>=0){
    if(age<=12){
        category='ребенок';
    }else if(age<=17){
        category='подросток';
    }else{
        category='взрослый'
    }

} else{
    console.log('Возраст не может быть меньше 0')
}
console.log(category)
