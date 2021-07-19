"use strict";

import { union, unionWith } from "lodash";

//One master Arr to contain all toDos
//Create new Arr based on groups present
//Arr can sort itself based on chosen sortlist, need to create different methods for this, done in control.js
//data will get data from localstorage

const data = {
  toDoMainArr: [],
  getToDoGroupArr: function() {
    const arr = [];
    for (let i = 0; i < this.toDoMainArr.length; i++){
      arr.push(this.toDoMainArr[i]["Group"]);
    }
    return union(arr, []);
  },
  sortArr: ["By Due Date"]
}

export default data;