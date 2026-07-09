// Даны let year. Определить,
// високосный ли год (делится на 4, но если делится на 100 — то не високосный, кроме случаев деления на 400),
// и вывести true/false в переменную isLeapYear.

let year = 1600;
let isLeapYear=false;
if(year%4===0&&year<=99){
    isLeapYear=true;

}else if(year%100===0&&year%400===0){
    isLeapYear=true;
}
console.log(isLeapYear)
