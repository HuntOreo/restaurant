import heroBg from '../img/heroBg.jpg';
import Info from './home/Info.js';
import Reserve from './home/Reserve.js';

function Home(anchor) {
  const landing = document.createElement('div');
  const container = document.createElement('div');
  const hero = document.createElement('div');
  const heroHeader = document.createElement('h1');

  landing.classList.add('landing');
  landing.classList.add('container');
  container.classList.add('content-container');
  hero.classList.add('hero');
  heroHeader.textContent = 'Yummy Foods Cafe';


  const img = document.createElement('img');
  img.src = heroBg;

  hero.append(img);
  hero.append(heroHeader);
  container.append(Reserve());
  container.append(Info());
  landing.append(hero);
  landing.append(container);
  anchor.append(landing);
}

export default Home;