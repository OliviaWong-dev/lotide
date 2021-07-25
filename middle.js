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

const middle = function(array) {
  let result;
  if (array.length > 2 && array.length % 2 !== 0) {
    const indexofMiddle = (array.length - 1) / 2;
    result = [array[indexofMiddle]];
  } else if (array.length > 2 && array.length % 2 === 0) {
    const indexofMiddle = array.length / 2;
    result = [array[indexofMiddle - 1], array[indexofMiddle]];
  }
  return result;
};



assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);