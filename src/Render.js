const content = document.querySelector('#content');

function render(page) {
  content.textContent = '';

  page(content);
}

export {
  render,
}