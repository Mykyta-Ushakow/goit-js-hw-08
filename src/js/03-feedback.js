import throttle from 'lodash.throttle';

const refs = {
    form : document.querySelector(".feedback-form"), 
    emailForm: document.querySelector('input[name = "email"]'),
    messageForm: document.querySelector('textarea[name = "message'),
    submitBtn: document.querySelector('button[type="submit"]')
}

const { form, emailForm, messageForm, submitBtn } = refs;

const NAME = "feedback-form-state";

form.addEventListener('input', throttle(logInput, 500));

function logInput(event) {
    const data = {
        email: emailForm.value,
        message: messageForm.value
    } 
    localStorage.setItem(NAME, JSON.stringify(data));
}

window.addEventListener("load", formChecker);

function formChecker(event) {    

    const formData = JSON.parse(localStorage.getItem(NAME));

    if (!formData) {
        emailForm.value = '';
        messageForm.value = '';
        return;
    }
    emailForm.value = formData.email;
    messageForm.value = formData.message;
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const formData = JSON.parse(localStorage.getItem(NAME));

    console.log(formData);
    emailForm.value = '';
    messageForm.value = '';
    
    localStorage.removeItem(NAME);
}