// Q2: Update the remaining count and warn when the limit is near.
const message = document.getElementById('message');
const counter = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');
const MAX_CHARACTERS = 100;

function updateCounter() {
  const remaining = MAX_CHARACTERS - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle('warning', remaining <= 20 && remaining > 0);
  counter.classList.toggle('limit', remaining === 0);
}

message.addEventListener('input', updateCounter);

// maxlength is a browser safeguard; beforeinput also blocks extra insertion.
message.addEventListener('beforeinput', (event) => {
  const isInsertion = event.inputType.startsWith('insert');
  const selectedLength = message.value.length -
    (message.selectionEnd - message.selectionStart);
  if (isInsertion && selectedLength >= MAX_CHARACTERS) event.preventDefault();
});

resetButton.addEventListener('click', () => {
  message.value = '';
  updateCounter();
  message.focus();
});
updateCounter();