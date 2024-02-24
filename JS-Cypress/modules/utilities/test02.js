const mathUtils = require('./math-helper.js');
/*
Generate 3 random number
1st between 5 and 10
2nd between 10 and 15
3rd between 15 and 20

Find the sum and average of the 3 numbers
*/

let r01 = mathUtils.getRandomNumber(5, 10);
let r02 = mathUtils.getRandomNumber(10, 15);
let r03 = mathUtils.getRandomNumber(15, 20);

console.log(r01, r02, r03);
console.log(mathUtils.add(r01, r02, r03));
console.log(mathUtils.average(r01, r02, r03));