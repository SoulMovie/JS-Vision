let pod = prompt("тип події?");
let price = 0;
let total = 0;
let free = 0;
let full = 0;
let sales = 0;

while (pod !== "кіно" && pod !== "театр" && pod !== "концерт") {
    pod = prompt("неправильний тип події, веедіть знову");
}
switch (pod) {
    case "кіно":
        price = 150;
        break;
    case "театр":
        price = 220;
        break;
    case "концерт":
        price = 350;
        break;
    default:
        console.error("!!wrong name!!");
        break;
}

let day = prompt("тип дня?");
while (day !== "будній" && day !== "вихідний"){
    day = prompt("неправильний тип дня, веедіть знову");
}
if (day === "вихідний"){
    price = price * 1.15;
}

let quant = Number(prompt("кількість квитків (від 1 до 6)"));
while (quant <1 || quant >6 || Number.isInteger(quant) === false){
    quant = Number(prompt("неправильна кількість квитків, веедіть знову"));
}

for (let i = 1; i <= quant; i++) {
    let age = Number(prompt("вік"));
    while (Number.isInteger(age) === false || age < -1){
        age = prompt("тільки цілі числа, вік")
    }
    if (age === -1){
        break;
    }else if(age >= 0 && age <= 5){
        free ++;
        continue;
    }else if (age >= 6 && age <= 12){
        sales ++;
        total += price*0.5;
    }else if (age >= 13 && age <= 17){
        sales ++;
        total += price*0.8;
    }else if (age >= 18 && age <= 25){
        let  sale = confirm("наявність студентського квитка")
        if (sale){
            sales ++;
            total += price*0.9;
        }else{
            full ++;
            total += price;
        }
    }else if (age >= 26 && age <= 59){
        full ++;
        total += price;
    }else if (age >= 60){
        sales ++;
        total += price*0.75;
    }
}
if (total > 1000){
    total = total*0.95;
}