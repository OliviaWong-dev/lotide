const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return false;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const flatten = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      // newArr = [...newArr, ...array[i]]
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {;
      newArr.push(array[i]);
    }
  }
  return newArr;
};


console.log(flatten([1, 2, [3, 4], 5, [6]])); //[1, 2, 3, 4, 5, 6])

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);