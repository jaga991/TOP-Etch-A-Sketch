"use strict";

const navGroupLi = (() => {
  const onClick = (btn) => {
    btn.addEventListener("click", (e) => {
      const allToDos = document.querySelectorAll(".toDo");
      if (e.target.classList.contains("clearHide")) {
        for (let i = 0; i < allToDos.length; i++) {
          allToDos[i].classList.remove("hide");
        }
      } else {
        for (let i = 0; i < allToDos.length; i++) {
          if (allToDos[i].querySelector(".toDoGroupText").textContent == e.target.textContent && allToDos[i].classList.contains("hide")) {
            allToDos[i].classList.toggle("hide");
          } else if (allToDos[i].querySelector(".toDoGroupText").textContent != e.target.textContent && !allToDos[i].classList.contains("hide")) {
            allToDos[i].classList.toggle("hide");
          }
        }
      }
    })
  };

  return {
    onClick
  }
})();

export default navGroupLi;