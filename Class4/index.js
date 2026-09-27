// let age = prompt("What is your age?");
// let access = confirm("Are you registered?");
//
// if(age>=18 && access == true){
//     alert("all good");
// }else{
//     alert("access denied");
// }
// let role = prompt("What is your role?");
// if (role==="admin" || role==="teacher") {
//     alert("welcome");
// } else{
//     alert("access denied")
// }
// let login = confirm("Are you registered?");
// let age = prompt("What is your age?");
// if (login===true) {
//     if (age>=18){
//         alert("access granted");
//     }
//     else {
//         alert("too young");
//     }
// } else {
//     alert("you arent logged in");
//}

// let age = Number(prompt("Enter your age"));
// if (age >= 18) {
//     alert("adult");
// } else if (age >= 13) {
//     alert("teenager")
// } else if (age >= 6) {
//     alert("student");
// } else if (age < 6) {
//     alert("child")
// }
// let age = prompt("What is your age?")
// if (age >= 18) {
//     alert("Access granted")
//
// }else if(age < 18 && age >= 16) {
//     let access = confirm("do you have permission");
//     if (access===true) {
//         alert("Access granted")
//
//     }else {
//         alert("Access denied")
//     }
// }else {
//     alert("Access denied")
// }
let name = prompt("product name?");
let price = prompt("product price?");
let amount = prompt("product amount?");
let sign = prompt("are you signed in?");
let promo = prompt("any promos?");
const promo2 = "sale";
let VIP = confirm("vip status?");

if (price*quantity >=1000 && sign === true && (promo === promo2 || VIP ===true)) {
    alert(`Price with sale: ${price * quantity - price * quantity * sale1} uah`);
} else {
    alert(`No sale price ${price * quantity} uah`);
}