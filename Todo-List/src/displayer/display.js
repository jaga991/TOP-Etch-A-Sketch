"use strict";

import build from "../builder/build";

const display = (() => {
  const addToDom = (targetEle, addedEle) => {
    if (Array.isArray(addedEle)) {
      for (let i = 0; i < addedEle.length; i++) {
        targetEle.appendChild(addedEle[i]);
      }
    }

    else if (typeof(addedEle == "string")) {
      targetEle.appendChild(addedEle);
    } 
  };

  const onStart = () => {
    let mainDiv = build.mainDiv;
    let header = build.header;
    let secondaryDiv = build.secondaryDiv;
    let navDiv = build.navDiv;
    let toDoListDiv = build.toDoListDiv;
    let addToDoDiv = build.addToDoDiv;

    const testNavUl = build.navUl("test group");
    const testToDo = build.toDos("test title", "this is a test", "test group", "99/99/9999");

    addToDom(document.body, mainDiv);
    addToDom(mainDiv, [header, secondaryDiv]);
    addToDom(secondaryDiv,[navDiv, toDoListDiv]);
    addToDom(navDiv, testNavUl);
    addToDom(toDoListDiv, addToDoDiv);
  };

  const removeAllToDos = () => {
    let i = document.getElementById("toDoListDiv");
    while (i.querySelector(".toDos")) {
      i.querySelector(".toDos").remove();
    }
  };

  return {
    onStart,
    addToDom,
    removeAllToDos
  };


})();

export default display;