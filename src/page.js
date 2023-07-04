export default function makeStarterPage() {
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}