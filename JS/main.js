//* Calling Variables from DOM
let loginBtn = document.querySelector('.loginBtn');
let logIn = document.querySelector('.logIn');
let signUp = document.querySelector('.signUp');
let closeIconLogin = document.querySelector('.closeIcon');
let closeIconSignUp = document.querySelector('.closeIconSignUp');
let registerBtn = document.querySelector('.registerBtn');
let loginBtnBottom = document.querySelector('.loginBtnBottom');

//* Login & Signup Click Event Listner
loginBtn.addEventListener('click', () => {
    logIn.style.display = 'flex';
});

registerBtn.addEventListener('click', () => {
    signUp.style.display = 'flex';
    logIn.style.display = 'none';
});

loginBtnBottom.addEventListener('click', () => {
    signUp.style.display = 'none';
    logIn.style.display = 'flex';
});

//* Close Button Event Listner
closeIconLogin.addEventListener('click', () => {
    logIn.style.display = 'none';
});

closeIconSignUp.addEventListener('click', () => {
    signUp.style.display = 'none';
});