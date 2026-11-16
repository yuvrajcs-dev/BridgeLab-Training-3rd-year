// Q3: Validate each step before allowing the user to continue.
const steps = [...document.querySelectorAll('.step')];
const stepLabel = document.getElementById('stepLabel');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const errorMessage = document.getElementById('error');
const form = document.getElementById('multiStepForm');
const summary = document.getElementById('summary');
let currentStep = 0;

function showStep() {
  steps.forEach((step, index) => step.classList.toggle('active', index === currentStep));
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? 'Finish' : 'Next';
  errorMessage.textContent = '';
}

function validateCurrentStep() {
  const field = steps[currentStep].querySelector('input');
  const value = field.value.trim();
  if (!value) return 'This field is required.';
  if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address.';
  if (field.type === 'password' && value.length < 6) return 'Password must contain at least 6 characters.';
  return '';
}

nextButton.addEventListener('click', () => {
  const error = validateCurrentStep();
  if (error) { errorMessage.textContent = error; return; }
  if (currentStep < 2) {
    currentStep++;
    showStep();
  } else {
    form.hidden = true;
    stepLabel.hidden = true;
    summary.hidden = false;
    summary.innerHTML = `<h2>Registration Summary</h2>
      <p><strong>Name:</strong> ${escapeHTML(document.getElementById('name').value.trim())}</p>
      <p><strong>Email:</strong> ${escapeHTML(document.getElementById('email').value.trim())}</p>
      <p><strong>Password:</strong> ••••••</p><p>All steps completed successfully!</p>`;
  }
});
backButton.addEventListener('click', () => {
  if (currentStep > 0) { currentStep--; showStep(); }
});
function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
showStep();