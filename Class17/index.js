let form = document.querySelector('#register-form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#confirm-password');
let terms = document.querySelector('#terms');
let result = document.querySelector('#result');

function showError(input, errorId, message) {
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'text');
    document.querySelector(errorId).textContent = message;
    return false;
}
