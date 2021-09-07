const letterPositions = function (sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]].push(i);
  }
  return result;
};

module.exports = letterPositions;
