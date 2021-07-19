"use strict";

import control from './controller/control';
import data from './data';
import './style.css';


document.onload = control.onStart();

window.addEventListener("beforeunload", (event) => {
  event.preventDefault;
  control.onClose();
})