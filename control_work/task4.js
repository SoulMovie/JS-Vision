const max = 7;

let time = 1;
let type = 0;
let price = 0;
let total = 0;
let best = 0;
let num = 0;
let electro = 0;

for (let i = 0; i < max; i++) {
    time = prompt("кількість годин стоянки")
    type = prompt("тип автомобіля")
    if (time === 0){
        break;
    }else if (time > 12 || time < 0){
        continue;
    }else{
        if (type === 1){
            price = 40;
        }else if(type === 2){
            price = 30;
            electro++;
        }else{
            alert("error");
            continue;
        }
        if (time > 5){
            price = price*0.5;
        }
        total += price;
        if (best < price){
            best = price;
        }
        num++;
    }
}

alert(num);
alert(electro);
alert(total);
alert(best);