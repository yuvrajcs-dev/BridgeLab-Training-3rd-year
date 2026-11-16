// Q9: Prevent submission when invalid, show inline errors, and clear errors while correcting.
const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const successMessage = document.getElementById('successMessage');

const fields = [
  { input: nameInput, error: document.getElementById('nameError'),
    validate: value => value.trim() ? '' : 'Name is required.' },
  { input: emailInput, error: document.getElementById('emailError'),
    validate: value => !value.trim() ? 'Email is required.' :
      (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Enter a valid email containing @.' : '') },
  { input: passwordInput, error: document.getElementById('passwordError'),
    validate: value => value.length < 6 ? 'Password must be at least 6 characters.' : '' }
];

function validateField(field) {
  const error = field.validate(field.input.value);
  field.error.textContent = error;
  field.input.setAttribute('aria-invalid', String(Boolean(error)));
  return !error;
}

fields.forEach((field) => {
  field.input.addEventListener('input', () => {
    validateField(field);
    successMessage.textContent = '';
  });
});

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const isFormValid = fields.map(validateField).every(Boolean);
  if (!isFormValid) {
    successMessage.textContent = '';
    return;
  }
  successMessage.textContent = 'Form Submitted Successfully';
  registrationForm.reset();
  fields.forEach(field => {
    field.error.textContent = '';
    field.input.setAttribute('aria-invalid', 'false');
  });
});