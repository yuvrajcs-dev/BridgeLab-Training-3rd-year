// Q8: The document capturing listener closes the menu on outside clicks.
const dropdown = document.getElementById('dropdown');
const dropdownButton = document.getElementById('dropdownButton');
const options = document.getElementById('options');
const selectedValue = document.getElementById('selectedValue');

dropdownButton.addEventListener('click', () => {
  const willOpen = options.hidden;
  options.hidden = !willOpen;
  dropdownButton.setAttribute('aria-expanded', String(willOpen));
});
options.addEventListener('click', (event) => {
  const option = event.target.closest('button[data-value]');
  if (!option) return;
  dropdownButton.textContent = `${option.dataset.value} ▾`;
  selectedValue.textContent = `Selected: ${option.dataset.value}`;
  options.hidden = true;
  dropdownButton.setAttribute('aria-expanded', 'false');
});

// Capturing phase: this listener runs before bubbling listeners.
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    options.hidden = true;
    dropdownButton.setAttribute('aria-expanded', 'false');
  }
}, true);