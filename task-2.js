"use strict";

const isEven = (element) => element % 2 === 0;

const isUniq = (element, index, arr) => arr.indexOf(element) === index;

function filterArray(array, cb) {
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
    if (cb(array[i], index, array)) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq)); // [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven)); // [2, 4, 2]
