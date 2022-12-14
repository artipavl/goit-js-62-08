const formEl = document.querySelector('.feedback-form');
const emailFormEl = document.querySelector('[name="email"]');
const messageFormEl = document.querySelector('[name="message"]');

const throttle = require('lodash.throttle');

formEl.addEventListener('input', throttle(setInputFormInLH, 500));
formEl.addEventListener('submit', onFormSubmit);

let formLog = {};

if (localStorage.getItem('feedback-form-state')) {
  formLog = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formLog.email) {
    emailFormEl.value = formLog.email;
  }
  if (formLog.message) {
    messageFormEl.value = formLog.message;
  }
}

function setInputFormInLH(e) {
  formLog[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formLog));
}

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  if (!email.value || !message.value.trim()) {
     alert("Заповніть всі поля");
    return;
  }

  // Створив окремий об'єкт для формування даних з форми
  // міг використовувати для цього formLog (не став використовувати згадавши про поле паролю, та вирішив що доцільно використовувати інший об’єкт )

  const userData = {
    email: email.value,
    message: message.value,
  };

  console.log(userData);
  //   console.log(formLog);

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formLog = {};
}
