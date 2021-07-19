"use strict";

import build from "../builder/build";

const display = (() => {
  const addToDom = (targetEle, addedEle) => {
    if (Array.isArray(addedEle)) {
      for (let i = 0; i < addedEle.length; i++) {
        targetEle.appendChild(addedEle[i]);
      }
    }

    else if ((typeof addedEle) == "string") {
      targetEle.appendChild(addedEle);
    }
  };

  return {
    addToDom
  };
})();

export default display;