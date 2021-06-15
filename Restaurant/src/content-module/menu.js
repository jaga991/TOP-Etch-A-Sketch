function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

function menuContent() {
  const menuDiv = document.createElement('div');
  const menuTitle = document.createElement('h1');
  const menuTitleText = document.createTextNode('Menu');

  menuDiv.setAttribute('id', 'menu-content');
  menuTitle.appendChild(menuTitleText);
  menuDiv.appendChild(menuTitle);

  return menuDiv;
}

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default menuContent;