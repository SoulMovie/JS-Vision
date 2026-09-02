let name = prompt("Enter product name");
let price = prompt("Enter your price");
let quantity = prompt("Enter your quantity");
let delivery = prompt("Enter your delivery");

let total = price * quantity + delivery;

console.log(`Zgallna zina na ${name} stanovit ${total} grr`);
alert("Zgallna zina na " + name + " stanovit " + total + " grr")