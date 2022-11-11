`use strict`
 
let inputEmail = document.querySelector(`.poppup__login`);
let emailSubtitle = document.querySelector(`.emailSubtitle.poppup__subtitle-erorr`);
let inputPasswordFirst = document.querySelector(`.poppup__password`);
let passwordFirstSubtitle = document.querySelector(`.passwordFirstSubtitle.poppup__subtitle-erorr`);
let inputPasswordSecond = document.querySelector(`input[placeholder="Подтвердите пароль"]`);
let passwordSecondSubtitle = document.querySelector(`.passwordSecondSubtitle.poppup__subtitle-erorr`);

let button = document.querySelector(`.poppup__button-enter`);

button.addEventListener(`click`, (event) => {
    event.preventDefault();

    function validateEmail(email) {   
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
        return re.test(String(email).toLowerCase());};

 
        let radioButtonSex = document.querySelectorAll(`input[name="sex"]`);
        let dataRadioButton = false;
        for (let i = 0 ; i < radioButtonSex.length; i++) {
            if(radioButtonSex[i].checked) {
                dataRadioButton = radioButtonSex[i].value;
                break;
            }
        };
        
let aboutMe = document.querySelector(`.poppup__textarea`).value;      

let checkbox = document.getElementById(`checkbox`).checked;
        

let email = inputEmail.value;
   
if(!email) {

    inputEmail.classList.add(`error`);
    emailSubtitle.classList.remove(`block-off`); 
    emailSubtitle.innerHTML = `Поле обязательно для заполнения`;

} else

if (validateEmail(email) !== true) {

    inputEmail.classList.add(`error`);
    emailSubtitle.classList.remove(`block-off`);
    emailSubtitle.innerHTML = `Email введён некорректно`;

} else {

    inputEmail.classList.remove(`error`);
    emailSubtitle.classList.add(`block-off`);

};

let password = inputPasswordFirst.value;

if(!password) {
    inputPasswordFirst.classList.add(`error`);
    passwordFirstSubtitle.classList.remove(`block-off`); 
    passwordFirstSubtitle.innerHTML = `Поле обязательно для заполнения`;
} else
if (password.length <! 8) {

    inputPasswordFirst.classList.add(`error`);
    passwordFirstSubtitle.classList.remove(`block-off`);
    passwordFirstSubtitle.innerHTML = `Пароль введён некорректно`;

} else {

    inputPasswordFirst.classList.remove(`error`);
    passwordFirstSubtitle.classList.add(`block-off`);

let passwordSecond = inputPasswordSecond.value;

if(!passwordSecond) {

    inputPasswordSecond.classList.add(`error`);
    passwordSecondSubtitle.classList.remove(`block-off`); 
    passwordSecondSubtitle.innerHTML = `Поле обязательно для заполнения`;

} else
if (  (passwordSecond !== password) || (passwordSecond.length <! 8)) {

    inputPasswordSecond.classList.add(`error`);
    passwordSecondSubtitle.classList.remove(`block-off`);
    passwordSecondSubtitle.innerHTML = `Пароли не совпадают`;

} else {

    inputPasswordSecond.classList.remove(`error`);
    passwordSecondSubtitle.classList.add(`block-off`);
    if(validateEmail(email) === true) {submitForm();};
    
};

function submitForm() {
let formData = new Object();

    formData.subscription = checkbox;
    formData.aboutMe = aboutMe;
    formData.password = passwordSecond;
    formData.email = email;
    formData.Sex = dataRadioButton;
   
    return console.log(formData);
};};});