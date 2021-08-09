const assertEqual = require('../assertEqual');
const tail = require('../tail');


//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const resultTwo = tail([]);
assertEqual(resultTwo.length, 0);
assertEqual(resultTwo[1], undefined);