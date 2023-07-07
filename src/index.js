import './css/main.css';
import makeStarterPage from './page';
import renderMenuContent from './menu';
import renderContactContent from './contact';

makeStarterPage();

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