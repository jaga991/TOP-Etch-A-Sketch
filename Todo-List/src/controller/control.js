"use strict";

import display from "../displayer/display";
import build from "../builder/build";
import data from "../data";

const control = (() => {
  let toDoArr = data.toDoArr;

  const toDoDeleteBtn = (deleteBtnEle) => {
    deleteBtnEle.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      toDoArr = [];

      updateArrFromToDoListDiv(toDoArr);
    })
  };

  const addToDoSubmitBtn = (addBtnEle) => {
    addBtnEle.addEventListener("click", (e) => {
      let i = {
        "Title": document.querySelectorAll(".input")[0].value,
        "Description": document.querySelectorAll(".input")[1].value,
        "Group": document.querySelectorAll(".input")[2].value,
        "Due": document.querySelectorAll(".input")[3].value
      };
      toDoArr.push(i);

      updateToDoListDivFromArr(toDoArr);
    })
  };

  const updateArrFromToDoListDiv = (arr) => {
    for (let i = 0; i < document.querySelectorAll(".toDos").length; i++) {
      let toDo = {
        "Title": document.querySelectorAll(".toDos")[i].querySelector(".title").textContent,
        "Description": document.querySelectorAll(".toDos")[i].querySelector(".description").textContent,
        "Group": document.querySelectorAll(".toDos")[i].querySelector(".group").textContent,
        "Due": document.querySelectorAll(".toDos")[i].querySelector(".dueDate").textContent
      }
      arr.push(toDo);
    }
  };

  const updateToDoListDivFromArr = (arr) => {
    display.removeAllToDos();
    for (let i = 0; i < arr.length; i++) {
      display.addToDom(document.getElementById("toDoListDiv"), build.toDos(arr[i]["Title"], arr[i]["Description"], arr[i]["Group"], arr[i]["Due"]));
    }
  };
  
  return {
    toDoDeleteBtn,
    addToDoSubmitBtn
  };
  
})();


export default control;