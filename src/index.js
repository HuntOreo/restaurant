import "./style.css";
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import { render } from './Render.js';

const buttons = document.querySelectorAll('header button');
const homeBtn = buttons[0];
const menuBtn = buttons[1];
const aboutBtn = buttons[2];

homeBtn.addEventListener('click', () => render(Home));
menuBtn.addEventListener('click', () => render(Menu));
aboutBtn.addEventListener('click', () => render(About));

function toggleActivePage() {
  for (let btn of buttons) {
    btn.classList.toggle();
  }
}
render(Home); 