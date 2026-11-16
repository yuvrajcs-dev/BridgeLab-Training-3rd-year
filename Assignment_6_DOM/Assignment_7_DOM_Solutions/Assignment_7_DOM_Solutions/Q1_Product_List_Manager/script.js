// Q1: Event delegation handles Edit and Delete from the parent list.
const productForm = document.getElementById('productForm');
const productInput = document.getElementById('productInput');
const productList = document.getElementById('productList');

productForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement('li');
  const label = document.createElement('span');
  label.className = 'product-name';
  label.textContent = name;
  const editButton = document.createElement('button');
  editButton.className = 'edit';
  editButton.textContent = 'Edit';
  editButton.dataset.action = 'edit';
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  deleteButton.textContent = 'Delete';
  deleteButton.dataset.action = 'delete';
  item.append(label, editButton, deleteButton);
  productList.appendChild(item);
  productInput.value = '';
  productInput.focus();
});

function saveEdit(item) {
  if (!item) return;
  const editor = item.querySelector('.edit-input');
  if (!editor) return;
  const newName = editor.value.trim();
  const label = document.createElement('span');
  label.className = 'product-name';
  label.textContent = newName || 'Untitled product';
  editor.replaceWith(label);
}

productList.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const item = button.closest('li');
  if (button.dataset.action === 'delete') {
    item.remove();
  } else if (button.dataset.action === 'edit') {
    if (item.querySelector('.edit-input')) return;
    const label = item.querySelector('.product-name');
    const editor = document.createElement('input');
    editor.className = 'edit-input';
    editor.value = label.textContent;
    label.replaceWith(editor);
    editor.focus();
    editor.select();
    editor.addEventListener('keydown', (keyEvent) => {
      if (keyEvent.key === 'Enter') saveEdit(item);
      if (keyEvent.key === 'Escape') {
        editor.value = label.textContent;
        saveEdit(item);
      }
    });
  }
});

// Clicking outside an edited list item automatically saves its current text.
document.addEventListener('click', (event) => {
  const editingItem = productList.querySelector('li .edit-input')?.closest('li');
  if (editingItem && !editingItem.contains(event.target)) saveEdit(editingItem);
});