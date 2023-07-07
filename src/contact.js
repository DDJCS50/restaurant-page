import renderHomePage from "./home";
import renderMenuContent from "./menu";

export default function renderContactContent() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  const tabBox = document.createElement('div');
  tabBox.setAttribute('id', 'cardBox');

  const homeTab = document.createElement('button');
  homeTab.setAttribute('class', 'card');
  homeTab.setAttribute('id', 'home');
  homeTab.innerText = 'Home';

  const menuTab = document.createElement('button');
  menuTab.setAttribute('class', 'card');
  menuTab.setAttribute('id', 'menu');
  menuTab.innerText = 'Menu';

  const contactBox = document.createElement('div');
  contactBox.setAttribute('id', 'cardBox');

  const contact = document.createElement('div');
  contact.setAttribute('class', 'contactCard');
  contact.innerText = `Thor Odinson
                       123-456-7890
                       godofthunder@asgard.com`;

  const contactTwo = document.createElement('div');
  contactTwo.setAttribute('class', 'contactCard');
  contactTwo.innerText = `Odin All-Father
                          123-456-7890
                          godofthunder@asgard.com`;

  const contactThree = document.createElement('div');
  contactThree.setAttribute('class', 'contactCard');
  contactThree.innerText = `Loki Odinson
                            123-456-7890
                            godofthunder@asgard.com`;

  main.appendChild(tabBox);
  tabBox.appendChild(homeTab);
  tabBox.appendChild(menuTab);
  main.appendChild(contactBox);
  contactBox.appendChild(contact);
  contactBox.appendChild(contactTwo);
  contactBox.appendChild(contactThree);

  const homeBtn = document.querySelector('#home');
  homeBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    main.innerHTML = '';
    renderHomePage();
  });

  const menuBtn = document.querySelector('#menu');
  menuBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    main.innerHTML = '';
    renderMenuContent();
  });
}