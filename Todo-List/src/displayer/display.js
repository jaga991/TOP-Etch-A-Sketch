"use strict";

import build from "../builder/build";

const display = (() => {
  const mainDiv = build.domElement("div", "main", false, false);
  const header = build.domElement("header", "header", false, false);
  const navDiv = build.domElement("div", "navDiv", false, false);
  const toDoListDiv = build.domElement("div", "toDoListDiv", false, false);

  const toDos = build.domElement("div", false, "toDos", false);

  const onPageStart = () => {
    
  }

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


})();

export default display;