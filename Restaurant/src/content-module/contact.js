function contactContent() {
  const contactDiv = document.createElement('div');
  const contactTitle = document.createElement('h1');
  const contactTitleText = document.createTextNode('Contact');

  contactDiv.setAttribute('id', 'contact-content');
  contactTitle.appendChild(contactTitleText);
  contactDiv.appendChild(contactTitle);

  return contactDiv;
}

export default contactContent;