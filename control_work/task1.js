let age = Number(prompt("вік?"));
let day = prompt("тип дня?")
let price = 0;
let sale = 0;


if (day !== "2" && day !== "1") {
    alert("Помилка: неправильний тип дня");
}else if (day === "1"){
    price = 200;
}else if(day === "2"){
    price = 250;
}

if (age <=7){
    sale = 1;
}else if(age >=8 && age <=17){
    sale = 0.5;
}else if(age >=18 && age <=59){
    sale = 0;
}else if (age >=60){
    sale = 0.4;
}else {
    sale = 0;
}

let total = 0;
total = price - price*sale;

alert(total + " грн");