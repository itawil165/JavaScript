console.log(Math.max(3, 5)); // 5
console.log(Math.min(3, 5)); // 3

/* Find max of:
    3
    4
    10
    -2
*/

// Java way

let max01 = Math.max(Math.max(3, 4), Math.max(10, -2));
let min01 = Math.min(Math.min(3, 4), Math.min(10, -2));

// JavaScript way

let max02 = Math.max(3, 4, 10, -2);
let min02 = Math.min(3, 4, 10, -2);

console.log(max01);
console.log(min01);
console.log(max02);
console.log(min02);

let abs01 = Math.abs(2 - 3);
let abs02 = Math.abs(-35);

console.log(abs01);
console.log(abs02);

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

let randomNumber = Math.floor(Math.random() * 10); // floor gives me the rounded down number and * 10 prevents it from being in between 0 and 1
console.log(randomNumber)

// Random number between 10 and 20 (including 10 and 20)
let randomNumber01 = Math.floor((Math.random() * 11) + 10);
console.log(randomNumber01);