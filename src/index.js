import './css/main.css';
import makeStarterPage from './page';
import renderMenuContent from './menu';

makeStarterPage();

const menuBtn = document.querySelector('#menu');

menuBtn.addEventListener('click', function(event) {
  event.stopPropagation();
  renderMenuContent();
});