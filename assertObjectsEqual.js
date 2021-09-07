const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArray");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `💓💓💓Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `💔💔💔Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`
    );
  }
};

// DELETE?
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);

module.exports = assertObjectsEqual;
