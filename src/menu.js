import cheese from './cheese-pizza.jpg';
import bbq from './bbq-pizza.jpg';
import artisan from './artisan-pizza.jpg';
import margherita from './margherita-pizza.jpg';
import renderHomePage from './home';

export default function renderMenuContent() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const tabBox = document.createElement('div');
  tabBox.setAttribute('id', 'cardBox');

  const homeTab = document.createElement('button');
  homeTab.setAttribute('class', 'card');
  homeTab.setAttribute('id', 'home');
  homeTab.innerText = 'Home';

  const contactTab = document.createElement('button');
  contactTab.setAttribute('class', 'card');
  contactTab.innerText = 'Contact';

  const pizzaBox = document.createElement('div');
  pizzaBox.setAttribute('id', 'cardBox');

  const pizza = document.createElement('div');
  const cheese = document.createElement('img');
  cheese.src = './images/cheese-pizza.jpg';
  cheese.alt = 'Picture of cheese pizza';
  pizza.setAttribute('class', 'pizzaCard');
  pizza.innerText = 'Cheese pizza';

  const pizzaTwo = document.createElement('div');
  const bbq = document.createElement('img');
  bbq.src = './images/bbq-pizza.jpg';
  bbq.alt = 'Picture of bbq pizza';
  pizzaTwo.setAttribute('class', 'pizzaCard');
  pizzaTwo.innerText = 'Bbq pizza';

  const pizzaThree = document.createElement('div');
  const artisan = document.createElement('img');
  artisan.src = './images/artisan-pizza.jpg';
  artisan.alt = 'Picture of artisan pizza';
  pizzaThree.setAttribute('class', 'pizzaCard');
  pizzaThree.innerText = 'Artisan pizza';

  const pizzaFour = document.createElement('div');
  const margherita = document.createElement('img');
  margherita.src = './images/margherita-pizza.jpg';
  margherita.alt = 'Picture of margherita pizza';
  pizzaFour.setAttribute('class', 'pizzaCard');
  pizzaFour.innerText = 'Margherita pizza';

  main.appendChild(tabBox);
  tabBox.appendChild(homeTab);
  tabBox.appendChild(contactTab);
  main.appendChild(pizzaBox);
  pizzaBox.appendChild(pizza);
  pizza.appendChild(cheese);
  pizzaBox.appendChild(pizzaTwo);
  pizzaTwo.appendChild(bbq);
  pizzaBox.appendChild(pizzaThree);
  pizzaThree.appendChild(artisan);
  pizzaBox.appendChild(pizzaFour);
  pizzaFour.appendChild(margherita);

  const homeBtn = document.querySelector('#home');
  homeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    main.innerHTML = '';
    renderHomePage();
  });
}