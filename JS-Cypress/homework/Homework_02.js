// TASK 01
console.log('-----TASK 01-----');

let str01 = "5", str02 = "2";
let num01 = Number(str01), num02 = Number(str02);

console.log('The sum of 5 and 2 is ' + (num01 + num02));
console.log('The difference of 5 and 2 is ' + (num01 - num02));
console.log('The product of 5 and 2 is ' + (num01 * num02));
console.log('The division of 5 and 2 is ' + (num01 / num02));
console.log('The remainder of 5 and 2 is ' + (num01 % num02));
console.log('The exponentiation of 5 and 2 is ' + (num01 ** num02));
console.log();

// TASK 02
console.log('-----TASK 02-----');

let s01 = '200', s02 = '-50';
let n01 = Number(s01), n02 = Number(s02);

console.log('The greatest value is ' + (Math.max(n01, n02)));
console.log('The smallest value is ' + (Math.min(n01, n02)));
console.log('The average is ' + ((n01 + n02) / 2));
console.log('The absolute difference is ' + (Math.abs(n01 - n02)));
console.log();

// TASK 03
console.log('-----TASK 03-----');

let rndm01 = Math.floor(Math.random() * 51) + 1, rndm02 = Math.floor(Math.random() * 51) + 1;

console.log(rndm01);
console.log(rndm02);
console.log('The absolute difference between the generated numbers is ' + (Math.abs(rndm01 - rndm02)));
console.log();

// TASK 04
console.log('-----TASK 04-----');

let maxRndm01 = Math.floor(Math.random() * 51) + 1, maxRndm02 = Math.floor(Math.random() * 51) + 1, maxRndm03 = Math.floor(Math.random() * 51) + 1, maxRndm04 = Math.floor(Math.random() * 51) + 1, maxRndm05 = Math.floor(Math.random() * 51) + 1;

console.log(maxRndm01);
console.log(maxRndm02);
console.log(maxRndm03);
console.log(maxRndm04);
console.log(maxRndm05);

console.log('The max value is ' + Math.max(maxRndm01, Math.max(maxRndm02, Math.max(Math.max(maxRndm03, Math.max(maxRndm04, maxRndm05))))));
console.log('The min value is ' + Math.min(maxRndm01, Math.min(maxRndm02, Math.min(Math.min(maxRndm03, Math.min(maxRndm04, maxRndm05))))));
console.log();

// TASK 05
console.log('-----TASK 05-----');

let rndmNum01 = Math.floor(Math.random() * 51) + 51, rndmNum02 = Math.floor(Math.random() * 51) + 51, rndmNum03 = Math.floor(Math.random() * 51) + 51;
let rndmSum = rndmNum01 + rndmNum02 + rndmNum03; 

console.log('The first number is ' + rndmNum01);
console.log('The second number is ' + rndmNum02);
console.log('The third number is ' + rndmNum03);
console.log('The sum of the generated numbers is ' + rndmSum);
console.log();

// TASK 06
console.log('-----TASK 06-----');

let rndmNumber01 = Math.floor(Math.random() * 101) + 1, rndmNumber02 = Math.floor(Math.random() * 101) + 1, rndmNumber03 = Math.floor(Math.random() * 101) + 1;

console.log(rndmNumber01);
console.log(rndmNumber02);
console.log(rndmNumber03);

if (rndmNumber01 > 25 && rndmNumber02 > 25 && rndmNumber03 > 25) console.log(true);
else console.log(false);
console.log();

// TASK 07
console.log('-----TASK 07-----');

let name = 'David';

console.log('The length of the name is ' + name.length);
console.log('The first character in the name is ' + name[0]);
console.log('The last character in the name is ' + name[name.length - 1]);
console.log('The first 3 characters in the name are ' + name.substring(0,3));
console.log('The last 3 characters in the name are ' + name.substring(2));
console.log();