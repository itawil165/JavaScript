// **SPREAD OPERATOR (...)**

const arr01 = [1, 2, 3], arr02 = [4, 5, 6], arr03 = [7, 8, 9];

// long way #1
const digits01 = [arr01[0], arr01[1], arr01[2], arr02[0], arr02[1], arr02[2], arr03[0], arr03[1], arr03[2], ];
console.log(digits01);

// long way #2
const digits02 = [];

for (const number of arr01){
    digits02.push(number);
}
for (const number of arr02){
    digits02.push(number);
}
for (const number of arr03){
    digits02.push(number);
}
console.log(digits02);

// long way #3
const digits03 = arr01.concat(arr02).concat(arr03);
console.log(digits03);



// using the Spread operator

const digits04 = [...arr01, ...arr02, ...arr03];
console.log(digits04);


const quater01 = ['Jan', 'Feb', 'Mar'];
const quater02 = ['Apr', 'May', 'Jun'];
const quater03 = ['Jul', 'Aug', 'Sep'];
const quater04 = ['Oct', 'Nov', 'Dec'];

const half01 = [...quater01, ...quater02];
const half02 = [...quater03, ...quater04];
const year = [...half01, ...half02];

console.log(half01);
console.log(half02);
console.log(year);

// Spread operator with objects

const table01 = {
    use: 'Dining',
    material: 'Wood'
};

const table02 = {
    ...table01,
    isExtendable: true
};

const table03 = {
    ...table02,
    shape: 'Rectangle'
};

console.log(table01);
console.log(table02);
console.log(table03);

/*
Write a function that takes an array and returns the max number
[4, 10, 3, 15, 8] -> 15
*/

const arr = [4, 10, 3, 15, 8];
let max = -Infinity;

for (const number of arr) {
    if (number > max) max = number;
}
console.log(max);

// using Spread operator
console.log(Math.max(...arr));