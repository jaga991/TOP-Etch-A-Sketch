'use strict';

import honeyBearImg from '../img/teddyBear.svg';
const linebreak = document.createElement('br')

function homeContent() {
  const homeDiv = document.createElement('div');

  const iconDiv = document.createElement('div');
  const icon = document.createElement('img');

  const textDiv = document.createElement('p');
  textDiv.style.textAlign = "center";
  textDiv.style.fontSize = "200%";
  textDiv.innerHTML = "Like sweet stuff?<br>Like cute stuff?<br>Then come on down to Honey bear's restaurant to satisfy your sweetening cute desires!"

  const homeTitle = document.createElement('h1');
  const homeTitleText = document.createTextNode('Home');
  

  homeDiv.setAttribute('id', 'home-content');
  homeDiv.style.cssText = "display: flex; align-items: center; justify-content: center; flex-direction: column";


  homeTitle.appendChild(homeTitleText);

  icon.src = honeyBearImg;
  icon.style.cssText = "width: 100%; height: 100%";
  iconDiv.style.cssText = "width: 25%; min-height: 200px";
  iconDiv.appendChild(icon);



  homeDiv.appendChild(homeTitle);
  homeDiv.appendChild(iconDiv);
  homeDiv.appendChild(textDiv);

  return homeDiv;
}

export default homeContent;