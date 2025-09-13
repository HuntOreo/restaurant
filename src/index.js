import "./style.css";
import Home from './components/Home.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import { render } from './Render.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', () => render(Home));
menuBtn.addEventListener('click', () => render(Menu));
aboutBtn.addEventListener('click', () => render(About));

render(Home);