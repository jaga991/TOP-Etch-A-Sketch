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
    txt = document.createTextNode(text);
    ele.appendChild(txt);
    }
    
    return ele;
  };

  
  
  return {
    domElement
  };
})();

export default build;