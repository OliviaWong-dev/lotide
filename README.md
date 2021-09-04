# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install owong-van/lotide`

**Require it:**

`const _ = require('owong-van/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: retrieve first item in an array
* `tail`: except for first item, retrieve all other items in an array
* `middle`: retrieve item in the middle of an array
* `assertArrayEqual`: evaluate two arrays to true if equal, otherwise false
* `assertObjectsEqual`: evaluate two objects to true if equal, otherwise false
* `assertEqual`: evaluate two values to true if equal, otherwise false
* `countLetters`: return numberof count of a letter in a word or sentence
* `eqArray`: evaluate two arrays to true if equal, otherwise false
* `countOnly`: given a list of items to return the number of counts of those items
* `eqObjects`: evaluate two objects to true if equal, otherwise false
* `findKey`: return the first key that met the condition given in an object
* `findKeyByValue`: return key of specified value
* `flatten`: remove nested array within an array
* `letterPositions`: return the position(s) of the letter in a string
* `map`: return new array base on the instructions of the callback
* `takeUntil`: select and return items in an array base on the criteria of the callback
* `without`: return an array after removing items specified in the callback