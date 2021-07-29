const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

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


// Returns true if both objects have identical keys with identical values.Returns
// Otherwise you get back a big fat false!
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


  // pull keys of both objects
  // compare length for the two objects
  // check if primitives are equal
  // if they are not equal, return false
  // if they are equal, check if they are array


  






const ab = { a: "1", b: "2" }
const ba = { b: "2", a: "1" }
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);