let quant = Number(prompt("кількість учнів?"));
let grade = 0;
let total = 0;
let avg = 0;
let good = 0;
let bad = 0;
let best = 0;

for (i = 0; i < quant; i++) {
    grade = prompt("оцінка")
    total = total + grade;
    if (grade >= 7) {
        good++;
    }else{
        bad++;
    }
    if (grade > best){
        best = grade;
    }
}
avg = total/quant;

alert("Сума: " + total);
alert("Середня: " + avg)
alert("Оцінок 7 і вище: " + good)
alert("Оцінок нижче 7: " + bad)
alert("Найбільша оцінка: " + best)