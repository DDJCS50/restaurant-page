import pizza from './pizza.jpg';

export default function makeStarterPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  
  const myPizza = new Image();
  myPizza.src = pizza;
  myPizza.alt = 'picture of pizza';
  
  const headline = document.createElement('h1');
  headline.innerText = 'Pepino\'s Pizza';

  const testimonial = document.createElement('div');
  testimonial.setAttribute('class', 'card');
  testimonial.innerText = 'Pepino\'s Pizza is the best!';
  

  header.appendChild(headline);
  main.appendChild(myPizza);
  main.appendChild(testimonial);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
}