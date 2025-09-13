import heroBg from '../img/heroBg.jpg';

function Home(anchor) {
  const landing = document.createElement('div');
  const hero = document.createElement('div');
  const heroHeader = document.createElement('h1');

  landing.classList.add('landing');
  hero.classList.add('hero');
  heroHeader.textContent = 'Yummy Foods Cafe';

  const img = document.createElement('img');
  img.src = heroBg;

  landing.append(hero);
  hero.append(heroHeader);
  hero.append(img);

  anchor.append(landing);
}

export default Home;