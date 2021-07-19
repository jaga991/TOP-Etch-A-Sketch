"use strict"

import deleteBtn from "../controller/deleteBtn";

const build = (() => {
  const domElement = (element, id, clss, text) => {
    const ele = document.createElement(element);

    if (typeof(id) == "string") {
      ele.setAttribute("id", id);
    }

    if (typeof(clss) == "string") {
      ele.className = clss;
    }

    if (typeof(text) == "string") {
      const i = document.createTextNode(text);
      ele.appendChild(i);
    }

    return ele;
  };

  const toDoConstructor = (title, description, group, dueDate) => {
    const titleDiv = (() => {
      const i = domElement("div", false, "toDoTitleDiv");
      const toDoTitle = domElement("h2", false, "toDoTitleText", title);
      i.appendChild(toDoTitle);

      return i;
    })(); 
  
    const descriptionDiv = (() => {
      const i = domElement("div", false, "toDoDescriptionDiv");
      const toDoDescription = domElement("p", false, "toDoDescriptionText", description);
      i.appendChild(toDoDescription);

      return i;
    })();
    

    const detailDiv = (() => {
      const i = domElement("Div", false, "toDoDetailDiv");
      const toDoGroup = domElement("h2", false, "toDoGroupText", group);
      const toDoDueDate = domElement("h2", false, "toDoDueDateText", dueDate);
      i.appendChild(toDoGroup);
      i.appendChild(toDoDueDate);

      return i;
    })();
    
    const toDoDeleteBtn = (() => {
      const i = domElement("button", false, "toDoDeleteBtn", "X");
      deleteBtn.onClick(i);

      return i;
    })(); 
    
    const toDo = domElement("div", false, "toDo");
    const toDoChildrenArr = [titleDiv, descriptionDiv, detailDiv, toDoDeleteBtn];
    for (let i = 0; i < toDoChildrenArr.length; i++) {
      toDo.appendChild(toDoChildrenArr[i]);
    }

    return toDo;
  };

  return {
    domElement,
    toDoConstructor
  };

})();

export default build