// function showMessage(){
//     alert("Hello World !");
// }
//
// showMessage();
// showMessage();
// showMessage();
//
// function showInfo() {
//     console.log("V gostah u Mariiky")
//     console.log("Magazine works z 8;00 do 23;00")
// }
// function showProducts(name, price, count) {
//     console.log("Mariika prodae ", name);
//     console.log("cina ", price, " grn za sht");
//     console.log("kilkist ", count, " sht");
// }
//
// showInfo();
// showProducts("Poroshok", 800, 3);
//
//
// function calculateTotal(price, count) {
//     return price * count;
// }
//
// let total = calculateTotal(800, 3);
// console.log(total);
//
//
// function discount(total) {
//     if (total >= 5000) {
//         return 10;
//     }else {
//         return 0;
//     }
// }
// let discount1 = discount(1000);
// let discount2 = discount(6000);
// console.log(discount1);
// console.log(discount2);
//
//
// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscount(total) {
//     if (total >= 10000) {
//         return 15
//     } else if (total >= 5000) {
//         return 10
//     }
//     else{
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * (percent/100);
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let productName = prompt("Enter product name");
// let productPrice = +prompt("Enter product price");
// let productAmount = +prompt("Enter product amount");
//
// let productTotal = getProductTotal(productPrice, productAmount);
// let productDiscountPercent = getDiscount(productTotal);
// let productDiscountValue = getDiscountValue(productTotal, productDiscountPercent);
// let finalPrice = getFinalPrice(productTotal, productDiscountValue);
//
// console.log(tovar ${productName} cina ${productPrice} grn ${productAmount} sht suma ${productTotal} sht discount ${productDiscountPercent}% suma discount ${productDiscountValue} grn zagalom ${finalPrice} grn);

function calculateTickets(price, count) {
    return price * count;
}
function getTicketDiscount(total) {
    if (total >= 1500) {
        return 15;
    }else if (total >= 1000) {
        return 10;
    }else if (total >= 500) {
        return 5;
    }else {
        return 0;
    }
}
function calculateTicketDiscount(total, percent) {
    return total * percent / 100;
}
function calculateTicketFinalPrice(total, discount) {
    return total - discount;
}



let ticketPrice = 200;
let ticketCount = 6;

let total = calculateTickets(ticketPrice, ticketCount);
let discountPercent = getTicketDiscount(total);
let discountValue = calculateTicketDiscount(total, discountPercent);
let finalPrice = calculateTicketFinalPrice(total, discountValue);

console.log("Zagalna vartist ", total, " grn");
console.log("Vidsotok znyshky ", discountPercent, " %");
console.log("Suma znyshky ", discountValue, " grn");
console.log("Kintseva suma do splaty ", finalPrice, " grn");