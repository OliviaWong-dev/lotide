const middle = function (array) {
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

module.exports = middle;
