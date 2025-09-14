import bagel from '../img/food/bagel.jpg';
import coffee from '../img/food/coffee.jpg';
import sandwich from '../img/food/sandwich.jpg';
import soup from '../img/food/soup.jpg';
import tea from '../img/food/tea.jpg';

const food = [
  {
    img: coffee,
    name: 'Coffee',
    price: 3.99,
  },
  {
    img: tea,
    name: 'Tea',
    price: 3.99
  },
  {
    img: bagel,
    name: 'Bagel',
    price: 5.99,
  },
  {
    img: sandwich,
    name: 'Sandwich',
    price: 6.99,
  },
  {
    img: soup,
    name: 'Soup',
    price: 5.99,
  }
];

function Menu(anchor) {
  const template = document.querySelector('#item-template');
  const menu = document.createElement('div');
  const container = document.createElement('div');

  menu.classList.add('menu');
  menu.classList.add('container');
  container.classList.add('content-container');

  for (let item of food) {
    const clone = template.content.cloneNode(true);
    const header = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const price = clone.querySelector('.price');

    header.textContent = item.name;
    img.src = item.img;
    price.textContent = `$${item.price}`

    container.append(clone);
  }

  menu.append(container);
  anchor.append(menu);
}

export default Menu