import Landing from './components/Landing.js';
import Menu from './components/Menu.js';

function render() {
  const content = document.querySelector('#content');
  Landing(content);
  Menu(content);
}

export {
  render,
}