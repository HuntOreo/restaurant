import bagel from '../img/food/bagel.jpg'
import coffee from '../img/food/coffee.jpg'
import sandwich from '../img/food/sandwich.jpg'
import soup from '../img/food/soup.jpg'

const food = [
  {
    img: bagel,
    name: 'bagel',
  },
  {
    img: coffee,
    name: 'coffee',
  },
  {
    img: sandwich,
    name: 'sandwich',
  },
  {
    img: soup,
    name: 'soup',
  }
];

function Menu(anchor) {
  const template = document.querySelector('#item-template');
  const container = document.createElement('div');

  container.classList.add('menu');

  for (let i = 0; i < 4; i++) {
    const clone = template.content.cloneNode(true);
    const header = clone.querySelector('h2');
    const img = clone.querySelector('img');

    header.textContent = food[i].name;
    img.src = food[i].img;

    container.append(clone);
  }

  anchor.append(container);
}

export default Menu