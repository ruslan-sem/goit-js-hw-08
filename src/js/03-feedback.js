import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };
const KEY = 'feedback-form-state';

function getFormData() {
  const savedData = localStorage.getItem(KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
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

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(KEY);
  event.currentTarget.reset();
  console.log(formData);
  formData = { email: '', message: '' };
}
