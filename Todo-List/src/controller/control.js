"use strict";

import display from "../displayer/display";
import build from "../builder/build";

const control = (() => {
  const onStart = () => {
    document.body.onload = () => {
      console.log("onStart");
    };
  };

  const printControl = () => {
    console.log("controlJs");
  }

  return {
    onStart,
    printControl
  };
  
})();


export default control;