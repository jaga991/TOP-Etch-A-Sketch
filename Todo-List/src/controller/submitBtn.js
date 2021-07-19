"use strict";

import control from "./control";
import build from "../builder/build";
import data from "../data";

const submitBtn = (() => {
  //Add ToDo to Arr and To ToDosDiv
  const onClick = (btn) => {
    btn.addEventListener("click", (e) => {
      //Collate inputs and put it into an object
      const parent = e.target.parentNode;
      let i = {
        "Title": parent.querySelectorAll(".input")[0].value,
        "Description": parent.querySelectorAll(".input")[1].value,
        "Group": parent.querySelectorAll(".input")[2].value,
        //This is where due date will be adjusted
        "Due Date": parent.querySelectorAll(".input")[3].value
      };

      //run inpput objects through error handler method in control.js
      if (control.inputErrorHandler(i)) {
        //If pass error handler, add toDo to toDosDiv first,
        let toDoEle = build.toDoConstructor(i.Title, i.Description, i.Group, i["Due Date"]) 
        document.getElementById("toDosDiv").prepend(toDoEle);

        //Then add ToDo to Main Array
        control.addToDoToArr(i);
        control.navGroupRefresh();

        console.log(data.toDoMainArr);
      }
    });
  };

  return {
    onClick
  };
})();

export default submitBtn;