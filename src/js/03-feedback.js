import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};
form.addEventListener("input", throttle(savedAddInput, 500));
form.addEventListener("submit", submitForm);

updateInput();

function savedAddInput(event) {
  event.preventDefault();
  const { email, message } = form.elements;
  formData.email = email.value;
  formData.message = message.value;
  

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData))
}

function submitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY)
    form.reset();
}

function updateInput() {
  const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}