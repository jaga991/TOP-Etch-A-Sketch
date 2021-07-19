"use strict";

import data from "../data";
import build from "../builder/build";
import display from "../displayer/display";
import displayOnStart from "../displayer/onstart";

//handles methods for data changes

const control = (() => {

  const addToDoToArr = (toDoObject) => {
    console.log(toDoObject);
    data.toDoMainArr.push(toDoObject);
    console.log(data.toDoMainArr);
  };

  const removeToDoFromArr = (toDoObject) => {
    //remove toDo from Main Arr by crosschecking Title key
    //if toDoObject["Title"] == mainArr[i]{"Title"}
    //mainArr.splice(mainArr.indexOf(mainArr[i]))
    //return to break the loop
    for (let i = 0; i < data.toDoMainArr.length; i++) {
      if (data.toDoMainArr[i]["Title"] == toDoObject["Title"]) {
        data.toDoMainArr.splice(data.toDoMainArr.indexOf(data.toDoMainArr[i]), 1);
        console.log(data.toDoMainArr);
      }
    }
  };

  const inputErrorHandler = (toDoObject) => {

    const checkIfEmpty = (inputObject) => {
      for (const key in inputObject) {
        if (!inputObject[key]) {
          return false;
        }
      }
      return true;
    };

    const checkValidDueDate = (inputObject) => {
      //leave this for now, come back later
    };

    const checkIfDuplicate = (inputObject) => {
      if (data.toDoMainArr == []) {
        return true
      }
      else {
        for (let i = 0; i < data.toDoMainArr.length; i++) {
          if (inputObject["Title"] == data.toDoMainArr[i]["Title"]) {
            return false;
          }
        }
      }
      return true;
    };

    if (checkIfEmpty(toDoObject)) {
      if (checkIfDuplicate(toDoObject)) {
        return true
      }
      else {
        alert("No duplicate Titles allowed, please try again");
      }
    }
    else {
      alert("Please do not leave field empty")
    }
    //check for empty fields, invalid due date (due date not earlier than now)
    // and duplicates
  };

  const navGroupRefresh = () => {
    const toDoGroupArr = data.getToDoGroupArr();
    while(document.querySelector("#filterList").lastChild) {
      document.querySelector("#filterList").lastChild.remove();
    }
    for (let i = 0; i < toDoGroupArr.length; i++) {
      let item = build.domElement("li", false, "listItem", toDoGroupArr[i])
      document.querySelector("#filterList").appendChild(item);
    }
  };

  const initToDoMainArrFromLocalStorage = () => {
    let i = JSON.parse(window.localStorage.getItem("data"));
    if (Array.isArray(i)) {
      data.toDoMainArr = i;
    }
    else {
      data.toDoMainArr = [];
    }
  };

  const saveToDoMainArrToLocalStorage = () => {
    window.localStorage.setItem("data", JSON.stringify(data.toDoMainArr));
  };

  const onStart = () => {
    initToDoMainArrFromLocalStorage();
    displayOnStart();
  };

  const onClose = () => {
    saveToDoMainArrToLocalStorage();
  }

  return{
    addToDoToArr,
    removeToDoFromArr,
    inputErrorHandler,
    navGroupRefresh,
    onStart,
    onClose,
    initToDoMainArrFromLocalStorage
  };
})();

export default control