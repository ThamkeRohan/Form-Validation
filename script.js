import Validation from "./Validation.js";

const usernameInput = document.querySelector(".username-input");
const phoneNumberInput = document.querySelector(".phone-number-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");

const usernameErrorMsg = document.querySelector(".username-error-msg");
const phoneNumberErrorMsg = document.querySelector(".phone-number-error-msg");
const emailErrorMsg = document.querySelector(".email-error-msg");
const passwordErrorMsg = document.querySelector(".password-error-msg");

const validation = new Validation();

usernameInput.addEventListener("change",function(e){
    if(!validation.isUsernameValid(e.target.value)){
        usernameErrorMsg.style.display = "block";
    }
    else{
        usernameErrorMsg.style.display = "none";
    }
})

phoneNumberInput.addEventListener("change",function(e){
    if(!validation.isPhoneNumberValid(e.target.value)){
        phoneNumberErrorMsg.style.display = "block";
    }
    else{
        phoneNumberErrorMsg.style.display = "none";
    }
})

emailInput.addEventListener("change",function(e){
    if (!validation.isEmailValid(e.target.value)) {
      emailErrorMsg.style.display = "block";
    } else {
      emailErrorMsg.style.display = "none";
    }
})

passwordInput.addEventListener("change",function(e){
    if (!validation.isPasswordValid(e.target.value)) {
      passwordErrorMsg.style.display = "block";
    } else {
      passwordErrorMsg.style.display = "none";
    }
})