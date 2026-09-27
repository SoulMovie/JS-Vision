// let num = 1;
// while (num <= 5){
//     console.log(num);
//     num++;
// }
// let userNumber = Number(prompt("Enter a number"));
// while (userNumber <1 || userNumber > 10) {
//     userNumber = Number(prompt("Invalid number, enter another one:"));
// }
// Number()
// String()
// isNaN()
// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age <= 0 || age >= 100) {
//     age=prompt("Enter your age");
// }

// const pin =1234
// let usrPin = +prompt("Enter a pin")
// let attempt = 1;
// while (attempt < 3 && usrPin != pin) {
//     usrPin = +prompt("Enter a pin")
//     attempt ++;
// }
// if (usrPin === pin) {
//     console.log("access granted")
// }
// else {
//     console.log("access denied")
// }
// let attempt = 1, pass = 1234;
// while (attempt <= 3) {
//     let userPass = +prompt("Enter your password");
//     if (pass === userPass) {
//     console.log("access granted");
//     break
//     }
//     console.log("wrong password");
//     attempt++;
// }
//
// let attempt = 1, pass = 1234;
// while (attempt <= 3) {
//     let userPass = +prompt("Enter your password");
//     if (pass === userPass) {
//         console.log("access granted");
//         break
//     }
//     console.log("wrong password");
//     attempt++;
//     console.log("attempts left:", (3-attempt));
// }
// let menuChoice;
// do{
//     menuChoice = prompt("Choose an action\n"+
//     "1-profile\n"+"2-settings\n"+"0-exit");
//     if (menuChoice === "1"){
//         alert("opening")
//     }
//     else if (menuChoice === "2"){
//         alert("opening settings")
//     }
//     else if (menuChoice === "0"){
//         alert("exiting")
//     }
//     else {
//         alert("invalid input")
//     }
// }
// while (menuChoice !== "0");
// --------------------------------------------------------
// let menuChoice;
//
// do {
//     menuChoice = prompt("Choose an action\n"+
//     "1-profile\n"+"2-settings\n"+"0-exit");
//     switch (menuChoice) {
//         case "1":
//             alert("opening");
//             break;
//         case "2":
//             alert("opening settings");
//             break;
//         case "0":
//             alert("exiting");
//             break;
//         default:
//             alert("invalid input");
//             break;
//     }
// } while (menuChoice !== "0");
//--------------------------------------------------------
// let count = 0, sum = 0;
// while (count < 5) {
//     let currentGrade = +prompt(`enter the grade no ${count + 1}`);
//     if (currentGrade < 1 || currentGrade > 12 || Number.isNaN(currentGrade)) {
//         alert("invalid grade");
//         continue;
//     }
//     sum += currentGrade;
//     count++;
// }
// console.log(sum);
// console.log(sum/5);
//
// let questionsNumber = 1;
// let score = 1;
// while (questionsNumber <= 5) {
//     let questions = "",answers = "";
//     switch (questionsNumber) {
//         case 1:
//             questions = "як створити змінну"
//             answers = "let";
//             break;
//         case 2:
//             questions = "оператор строгої рівності"
//             answers = "===";
//         case 3:
//             questions = "як позначається and"
//             answers = "&&"
//             break;
//         case 4:
//             questions = "як завершити цикл"
//             answers = "break"
//             break;
//         case 5:
//             questions = "як записати інкремент"
//             answers = "++"
//             break;
//
//     }
//     let answer = prompt(`question no ${questionsNumber} out of 5\n ${questions}`;
//     if (answer === "") {
//         console.log("enter something");
//         continue;
//     }
//     if (answer === answers){
//         alert("правильно");
//         score++;
//     }
//     else {
//         alert("не правильно")
//     }
//     questionsNumber++;
//
// }
// if (score === 5){
//     alert("Відмінно")
// }
// else if (score >= 3){
//     alert("норм")
// }
// else {
//     alert("невдаха")
// }
let age = +prompt("enter your age");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("invalid input");
}

const pin = 1234;
let attempt = 1;
let access = 0;

while (attempt <= 3) {
    let userPin = +prompt("enter your pin");

    if (userPin === pin) {
        console.log("access granted");
        access = 1;
        break;
    }

    console.log("incorrect pin try again");
    attempt++;
}

if (access == 1) {
    let menuChoice;

    do {
        menuChoice = prompt("choose an action\n"+
            "1-profile\n    "+"2-messages\n"+"3-settings\n"+"0-exit");

        switch (menuChoice) {
            case "1":
                alert("opening profile");
                break;
            case "2":
                alert("opening messages");
                break;
            case "3":
                alert("opening settings");
                break;
            case "0":
                alert("exiting");
                break;
        }
    } while (menuChoice !== "0");
}