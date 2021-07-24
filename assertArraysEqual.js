// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length != expectedArr.length) {
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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // => should PASS