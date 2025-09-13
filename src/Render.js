function render(page) {
  const content = document.querySelector('#content');
  content.textContent = '';

  page(content);
}

export {
  render,
}