import "./style.css";
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import { render } from './Render.js';

const buttons = document.querySelectorAll('header button');
const homeBtn = buttons[0];
const menuBtn = buttons[1];
const aboutBtn = buttons[2];

let selected = document.querySelector('.selected');

homeBtn.addEventListener('click', () => {
  render(Home)
  toggleSelected(homeBtn);
});
menuBtn.addEventListener('click', () => {
  render(Menu)
  toggleSelected(menuBtn);
});
aboutBtn.addEventListener('click', () => {
  render(About)
  toggleSelected(aboutBtn);
});

const toggleSelected = function (btn) {
  if (selected) selected.classList.toggle('selected');
  btn.classList.toggle('selected');
  selected = btn;
}

render(Home); 