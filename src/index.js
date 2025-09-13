import "./style.css";
import Landing from './components/Landing.js';
import Menu from './components/Menu.js';
import Contacts from './components/Contact.js';
import { render } from './Render.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', () => render(Landing));
menuBtn.addEventListener('click', () => render(Menu));
aboutBtn.addEventListener('click', () => render(Contacts));

render(Landing);
