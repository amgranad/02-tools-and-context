'use strict';

// do not use third party libraries

const Fp = {};

Fp.forEach = (array, callback) => {
  if (array === null || array.length === 0) {
    return undefined;
  }
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

Fp.map = (array, callback) => {
  if (array === null || array.length === 0) {
    return undefined;
  } else {
    let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
  }
} // returns array

Fp.filter = (array, callback) => {
  if (array === null || array.length === 0) {
    return undefined;
  } else {
    let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let checkItem = callback(array[i])
    if (checkItem) {
      newArray.push(array[i]);
    }
  }
  return newArray;
  }
} 

Fp.reduce = (array, callback, initialState) => {
  let reduced = 0;
  if (initialState) {
    reduced = initialState;
  }
  if (array === null) {
    return undefined;
  } else if (array.length === 0){
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      reduced = callback(reduced, array[i]);
    }    
  }
  return reduced;
} // returns data

module.exports = Fp;