import renderMenuContent from "./menu";
import renderContactContent from "./contact";

export default function renderHomePage() {
  const main = document.querySelector('main');

  const tabBox = document.createElement('div');
  tabBox.setAttribute('id', 'cardBox');

  const menuTab = document.createElement('button');
  menuTab.setAttribute('class', 'card');
  menuTab.setAttribute('id', 'menu');
  menuTab.innerText = 'Menu';

  const contactTab = document.createElement('button');
  contactTab.setAttribute('class', 'card');
  contactTab.setAttribute('id', 'contact');
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

  main.appendChild(tabBox);
  tabBox.appendChild(menuTab);
  tabBox.appendChild(contactTab);
  main.appendChild(blurb);
  main.appendChild(testimonialBox);
  testimonialBox.appendChild(testimonial);
  testimonialBox.appendChild(testimonialTwo);
  testimonialBox.appendChild(testimonialThree);

  const menuBtn = document.querySelector('#menu');
  menuBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    renderMenuContent();
  });

  const contactBtn = document.querySelector('#contact');
  contactBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    renderContactContent();
  });
}