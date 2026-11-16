// Q5: Modal opens for the clicked image. stopPropagation keeps inside clicks from closing it.
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModalButton = document.getElementById('closeModal');

gallery.addEventListener('click', (event) => {
  if (event.target.tagName !== 'IMG') return;
  modalImage.src = event.target.src;
  modalImage.alt = event.target.alt;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
});
modal.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImage.src = '';
});
modalImage.addEventListener('click', (event) => event.stopPropagation());
closeModalButton.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalImage.src = '';
});