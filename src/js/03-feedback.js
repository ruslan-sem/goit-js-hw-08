import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const email = document.querySelector('input');
// const message = document.querySelector('textarea');
let formData = {};
const KEY = 'feedback-form-state';

function getFormData() {
  const savedData = localStorage.getItem(KEY);
  //   console.log(savedData);
  if (savedData) {
    formData = JSON.parse(savedData);
    if (!formData.email) {
      formData.email = '';
    }
    if (!formData.message) {
      formData.message = '';
    }
    // console.log(formData);
  } else {
    formData.email = '';
    formData.message = '';
  }
  form.email.value = formData.email;
  form.message.value = formData.message;
}

getFormData();

form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}
