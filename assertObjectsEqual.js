

const eqObjects = function (object1, object2) {
  const keyOne = Object.keys(object1);
  const keyTwo = Object.keys(object2);
  let result = false;
  if (keyOne.length !== keyTwo.length) {
    return false
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
}


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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💓💓💓Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`💔💔💔Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd, dc)
assertObjectsEqual(cd, cd2)
