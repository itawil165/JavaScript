const mathUtils = require('./math-helper.js');
// const {add, divide} = require('./math-helper.js'); // used if you only want certain functions to be exported

console.log(mathUtils.add(3, 5));
console.log(mathUtils.multiply(3, 5));
console.log(mathUtils.divide(10, 2));
console.log(mathUtils.getRandomNumber(6, 12));