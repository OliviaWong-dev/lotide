const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArray");

const eqObjects = function (object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);
  let result = false;
  if (keyOne.length !== keyTwo.length) {
    return false;
  }
  for (key1 of keyOne) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (eqArrays(object1[key1], object2[key1])) {
        result = true;
      } else {
        return false;
      }
    } else {
      if (object1[key1] === object2[key1]) {
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
};

module.exports = eqObjects;
