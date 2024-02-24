/*
    Create a function that takes a string and returns the first character
    Hello -> H
    JavaScript -> J
*/

// 1- Regular function syntax
function firstChar(str) {
    return str[0];
}

console.log(firstChar('Hello'));
console.log(firstChar('JavaScript'));

// 2- Function expresion syntax
const fChar = function (str) {
    return str[0];
}

console.log(fChar('Hello'));
console.log(fChar('JavaScript'));

// 3- Arrow function syntax - mostly used for single-line/simple functions
const firstC = (str) => str[0];

console.log(firstC('Hello'));
console.log(firstC('JavaScript'));

// Array forEach() callback function

// Array map() callback function
const numbers02 = [10, 5, 2, 6];

/*
for (let i = 0; i < numbers02.length; i++) {
    numbers02[i] *= 3;
}
*/

const result02 = numbers02.map((number) => number * 3);
console.log(result02);

// Array filter() callback function

// Find all the negative numbers -> [-5, -10]
const numbers03 = [-5, 0, 5, 10, 23, -10];

let result03 = numbers03.filter((x) => x < 0);

console.log(result03);

// Array reduce() callback function

// Count how many names begin with J -> 4
const names01 = ['James', 'John', 'Jane', 'Max', 'Jennifer'];

let count = 0;

const result04 = names01.reduce((count, name) => {
    if(name[0] === 'J') return count + 1;
    else return count;
}, 0 );

console.log(result04);


// Array find() callback function

// Find first name that contains an A -> Jane
const names02 = ['John', 'Jane', 'Alex', 'Jack', 'Max'];

console.log(names02.find((name) => name.includes('a')));
console.log(names02.findIndex((name) => name.includes('a')));

// Arrat some() and every() callback function

// Check if every price is more than 0
const prices = [10.5, 3.33, 5.00, 99.99];

console.log(prices.every((price) => price > 0));

// Check if a price is more than 50
console.log(prices.some((price) => price > 50));