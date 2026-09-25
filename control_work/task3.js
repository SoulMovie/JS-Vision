const pin = 2026;

let tries = 3;
let pinGuess = 0;

while (tries > 0) {
    pinGuess = prompt("pin?")
    tries--;
    if (pinGuess === pin) {
        alert("Доступ дозволено");
        break;
    }else if (i !== tries) {
        alert("спроб залишилось: " + (tries));
    }else {
        alert("Доступ заблоковано");
        break;
    }
}