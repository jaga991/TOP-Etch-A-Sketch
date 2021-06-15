import honeyBearImg from '../img/teddyBear.svg';

function homeContent() {
  const homeDiv = document.createElement('div');
  const iconDiv = document.createElement('div');
  const homeTitle = document.createElement('h1');
  const homeTitleText = document.createTextNode('Home');

  homeDiv.setAttribute('id', 'home-content');
  homeTitle.appendChild(homeTitleText);
  homeDiv.appendChild(homeTitle);

  return homeDiv;
}

export default homeContent;