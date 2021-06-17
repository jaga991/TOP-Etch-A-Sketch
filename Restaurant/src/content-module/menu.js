'use strict';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

function menuItem(i, name, description) {
  let foodItemDiv = document.createElement('div');
  let foodImg = document.createElement('img');
  let foodDescription = document.createElement('p');
  let foodDescriptionTemp = `<h2>${name}</h2><br>${description}`;

  foodDescription.innerHTML = foodDescriptionTemp;

  foodItemDiv.style.cssText = "max-width: 40%; min-width: 200px; min-height: 200px; margin: 40px";
  
  foodImg.style.cssText = "width: 100%; height: 80%";
  foodImg.src = images[i];
  foodImg.style.borderRadius = "5%";
  foodImg.style.border = "8px solid hsl(53, 68%, 50%)"
  
  foodItemDiv.appendChild(foodImg);
  foodItemDiv.appendChild(foodDescription);

  console.log(foodItemDiv);
  return foodItemDiv;
}

function menuContent() {
  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('h1');
  const menuTitleText = document.createTextNode('Menu');
  const menuFoodItems = document.createElement('div');

  menuDiv.setAttribute('id', 'menu-content');
  menuDiv.style.cssText = "display: flex; align-items: center; justify-content: center; flex-direction: column";

  menuTitle.appendChild(menuTitleText);

  menuFoodItems.style.cssText = "display: flex; flex-direction: row; flex-wrap: wrap; flex: 1 1; justify-content: space-around;  max-width: 70%";
  menuFoodItems.appendChild(menuItem('berryTea.jpg', 'Berry Tea', 'A sweet, refreshing, and a healthy guilt-free treat for you'));
  menuFoodItems.appendChild(menuItem('berryTea.jpg', 'Berry Tea', 'A sweet, refreshing, and a healthy guilt-free treat for you'));
  menuFoodItems.appendChild(menuItem('berryTea.jpg', 'Berry Tea', 'A sweet, refreshing, and a healthy guilt-free treat for you'));
  menuFoodItems.appendChild(menuItem('berryTea.jpg', 'Berry Tea', 'A sweet, refreshing, and a healthy guilt-free treat for you'));
  
  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(menuFoodItems);

  return menuDiv;
}



export default menuContent;