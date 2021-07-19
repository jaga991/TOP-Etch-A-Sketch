"use strict";
import build from "./build";
import submitBtn from "../controller/submitBtn";
import data from "../data";

//creates and returns elements used for initialDisplay

const initialElements = (() => {
  const domElement = build.domElement;

  const mainDiv = (() => {
    const i = domElement("div", "mainDiv");

    const mainHeader = (() => {
      const i = build.domElement("header", "mainHeader");
      const text = domElement("h1", "headerText", false, "Todo-List");
      i.appendChild(text);
      return i
    })();
  
    const secondaryDiv = (() => {
      const secDiv = domElement("div", "secondaryDiv");
      const navDiv = (() => {
        const i = domElement("div", "navDiv");
        return i;
      })();
  
      const toDoListDiv = (() => {
        const i = domElement("div", "toDoListDiv");
  
        const addToDoDiv = (() => {
          const i = domElement("div", "addToDoDiv");
      
          const addToDoInputCreator = (labelTextContent, inputType) => {
            const div = domElement("div", false, "inputDiv");
            const label = domElement("label", false, "inputLabel", labelTextContent);
            const input = domElement("input", false, "input");
            input.type = inputType;
            div.appendChild(label);
            div.appendChild(input);
      
            return div;
          };
          const addToDoTitleInput = addToDoInputCreator("Title", "text");
          const addToDoDescriptionInput = addToDoInputCreator("Description", "text");
          const addToDoGroupInput = addToDoInputCreator("Group", "text");
          const addToDoDueDateInput = addToDoInputCreator("Due Date", "date");
          const addToDoSubmitBtn = domElement("button", "addToDoBtn", false, "+");
      
          submitBtn.onClick(addToDoSubmitBtn)
      
          i.appendChild(addToDoTitleInput);
          i.appendChild(addToDoDescriptionInput);
          i.appendChild(addToDoGroupInput);
          i.appendChild(addToDoDueDateInput);
          i.appendChild(addToDoSubmitBtn);
          return i;
        })();
      
        const toDosDiv = (() => {
          const i = domElement("div", "toDosDiv");
          return i;
        })();
      
        i.appendChild(addToDoDiv);
        i.appendChild(toDosDiv);
        return i;
      })();
      secDiv.appendChild(navDiv);
      secDiv.appendChild(toDoListDiv);
      return secDiv;
    })();

    i.appendChild(mainHeader);
    i.appendChild(secondaryDiv);
    return i;
  })();

  return {
    mainDiv,
  };
})();

export default initialElements;