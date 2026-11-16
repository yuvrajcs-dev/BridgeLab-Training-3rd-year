// Q4: setAttribute() changes the body's theme and custom saved-theme attribute.
const themeButtons = document.querySelectorAll('[data-theme-choice]');
const currentThemeLabel = document.getElementById('currentTheme');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedTheme = button.getAttribute('data-theme-choice');
    document.body.setAttribute('data-theme', selectedTheme);
    document.body.setAttribute('data-current-theme', selectedTheme);
    currentThemeLabel.textContent = selectedTheme[0].toUpperCase() + selectedTheme.slice(1);
  });
});