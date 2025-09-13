import Landing from './components/Landing.js';
import Menu from './components/Menu.js';
import Contacts from './components/Contact.js';

function render() {
  const content = document.querySelector('#content');
  Landing(content);
  Menu(content);
  Contacts(content);
}

export {
  render,
}