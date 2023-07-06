import pizza from './pizza.jpg';

export default function makeStarterPage() {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  
  const headline = document.createElement('h1');
  headline.innerText = 'Pepino\'s Pizza';

  const tabBox = document.createElement('div');
  tabBox.setAttribute('id', 'cardBox');

  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'card');
  menuTab.innerText = 'Menu';

  const contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'card');
  contactTab.innerText = 'Contact';

  const blurb = document.createElement('p');
  blurb.innerText = 'Our Pizzas Are A Cut Above The Rest!';

  const testimonialBox = document.createElement('div');
  testimonialBox.setAttribute('id', 'cardBox');

  const testimonial = document.createElement('div');
  testimonial.setAttribute('class', 'card');
  testimonial.innerText = 'Pepino\'s Pizza is the best!';

  const testimonialTwo = document.createElement('div');
  testimonialTwo.setAttribute('class', 'card');
  testimonialTwo.innerText = 'Pepino\'s Pizza is the best!';

  const testimonialThree = document.createElement('div');
  testimonialThree.setAttribute('class', 'card');
  testimonialThree.innerText = 'Pepino\'s Pizza is the best!';
  
  main.style.backgroundImage = "url('./images/pizza.jpg')";
  
  header.appendChild(headline);
  main.appendChild(tabBox);
  tabBox.appendChild(menuTab);
  tabBox.appendChild(contactTab);
  main.appendChild(blurb);
  main.appendChild(testimonialBox);
  testimonialBox.appendChild(testimonial);
  testimonialBox.appendChild(testimonialTwo);
  testimonialBox.appendChild(testimonialThree);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
}