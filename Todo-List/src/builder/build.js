"use strict";

import control from "../controller/control";

const build = (() => {
  const domElement = (element, id, clss, text) => {
    let ele = document.createElement(element);

    if (typeof(id) == "string") {
    ele.setAttribute('id', id);
    }
  
    if (typeof(clss) == "string") {
    ele.className = clss;
    }
  
    if(typeof(text) == "string") {
    let t = document.createTextNode(text);
    ele.appendChild(t);
    }
    
    return ele;
  };

  const mainDiv = (() => {
    let i = domElement("div", "mainDiv", false, false);
    return i;
  })();
  const header = (() => {
    let i = domElement("header", "header", false, false);
    let text = domElement("h1", "headerText", false, "Todo-List");
    i.appendChild(text);
    return i;
  })();
  const secondaryDiv = (() => {
    let i = domElement("div", "secondaryDiv", false, false);
    return i;
  })();
  const navDiv = (() => {
    let i = domElement("div", "navDiv", false, false);
    return i;
  })();
  const toDoListDiv = (() => {
    let i = domElement("div", "toDoListDiv", false, false);
    return i;
  })();
  const addToDoDiv = (() => {
    let i = domElement("div", "addToDoDiv", false, false);

    let addToDoTitleInput = (() => {
      let div = domElement("div", false, "inputDiv", false);
      let title = domElement("label", false, "inputHeader", "Title");
      let titleInput = domElement("input", false, "input", false);
      titleInput.type = "text";
      div.appendChild(title);
      div.appendChild(titleInput);

      return div;
    })();

    let addToDoDescriptionInput = (() => {
      let div = domElement("div", false, "inputDiv", false);
      let description = domElement("label", false, "inputHeader", "Description");
      let descriptionInput = domElement("input", false, "input", false);
      descriptionInput.type = "text";
      div.appendChild(description);
      div.appendChild(descriptionInput);

      return div;
    })();

    let addToDoGroupInput = (() => {
      let div = domElement("div", false, "inputDiv", false);
      let group = domElement("label", false, "inputHeader", "Group");
      let groupInput = domElement("input", false, "input", false);
      groupInput.type = "text";
      div.appendChild(group);
      div.appendChild(groupInput);

      return div;
    })();

    let addToDoDueDateInput = (() => {
      let div = domElement("div", false, "inputDiv", false);
      let dueDate = domElement("label", false, "inputHeader", "Due");
      let dueDateInput = domElement("input", false, "input", false);
      dueDateInput.type = "date";
      div.appendChild(dueDate);
      div.appendChild(dueDateInput);

      return div;
    })();

    let addToDoSubmitBtn = domElement("button", "addToDoBtn", false, "+");
    control.addToDoSubmitBtn(addToDoSubmitBtn);

    i.appendChild(addToDoTitleInput);
    i.appendChild(addToDoDescriptionInput);
    i.appendChild(addToDoGroupInput);
    i.appendChild(addToDoDueDateInput);
    i.appendChild(addToDoSubmitBtn);

    return i;
  })();
  

  const navUl = (group) => {
    let i = domElement("ul", `nav${group}`, navUl, group);
    return i;
  }

  const toDos = (title, description, group, dueDate) => {
    let titleDiv = domElement("div", false, "titleDiv");
    let toDoTitle = domElement("h1", false, "title", title);
    titleDiv.appendChild(toDoTitle);

    let descriptionDiv = domElement("div", false, "descriptionDiv", false);
    let toDoDescription = domElement("p", false, "description", description);
    descriptionDiv.appendChild(toDoDescription);

    let detailDiv = domElement("div", false, "detailDiv", false);
    let toDoGroup = domElement("h3", false, "group", group);
    let toDoDueDate = domElement("h3", false, "dueDate", dueDate);
    detailDiv.appendChild(toDoGroup);
    detailDiv.appendChild(toDoDueDate);

    let deleteBtn = domElement("button", false, "deleteBtn", "X");
    control.toDoDeleteBtn(deleteBtn);

    let toDo = domElement("div", false, "toDos", false);
    let toDoChild = [titleDiv, descriptionDiv, detailDiv, deleteBtn];
    for (let i = 0; i < toDoChild.length; i++) {
      toDo.appendChild(toDoChild[i]);
    }

    return toDo;
  };

  
  
  return {
    domElement,
    mainDiv,
    header,
    secondaryDiv,
    navDiv,
    toDoListDiv,
    addToDoDiv,
    toDos,
    navUl
  };
})();

export default build;