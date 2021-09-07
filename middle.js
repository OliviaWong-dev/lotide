const middle = function (array) {
  let result;
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    const indexofMiddle = (array.length - 1) / 2;
    result = [array[indexofMiddle]];
  }
  if (array.length % 2 === 0) {
    const indexofMiddle = array.length / 2;
    result = [array[indexofMiddle - 1], array[indexofMiddle]];
  }
  return result;
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([0])); // => [3, 4]
console.log(middle([0, 1])); // => [3, 4]

module.exports = middle;
