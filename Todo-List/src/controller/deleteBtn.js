"use strict";

import control from "./control";

const deleteBtn = (() => {
  const onClick = (btn) => {
    btn.addEventListener("click", (e) => {
      let parent = e.target.parentNode;
      console.log(parent.querySelector(".toDoTitleText").textContent);
      let i = {
        "Title": parent.querySelector(".toDoTitleText").textContent,
        "Description":  parent.querySelector(".toDoDescriptionText").textContent,
        "Group":  parent.querySelector(".toDoGroupText").textContent,
        "Due Date": parent.querySelector(".toDoDueDateText").textContent
      };

      control.removeToDoFromArr(i);
      control.navGroupRefresh();
      parent.remove();
      
    });
  };

  return {
    onClick
  };
})();

export default deleteBtn;