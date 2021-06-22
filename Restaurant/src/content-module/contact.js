'use strict';





function contactContent() {

  const contactDiv = document.createElement('div');
  const contactTitle = document.createElement('h1');
  const contactTitleText = document.createTextNode('Contact');
  const mapDiv = document.createElement('div');
  
  mapDiv.setAttribute('id', 'map');
  mapDiv.setAttribute('class', 'map');

  

  contactDiv.setAttribute('id', 'contact-content');
  contactTitle.appendChild(contactTitleText);
  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(mapDiv);

  return contactDiv;
}

export default contactContent;