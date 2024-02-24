// for loops
let sum = 0;
let factorial = 1;

for (let i = 1; i <= 5; i++) {
    sum += i;
    factorial *= i;
}

console.log(sum);
console.log(factorial);

let str = "TechGlobal";


for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);

// for-of loops (for-each in Java)
const numbers = [15, 23, 32];
let sumNumbers01 = 0;

for (let i = 0; i < numbers.length; i++) {
    sumNumbers01 += numbers[i];
}

console.log(sumNumbers01);

let sumNumbers02 = 0;

for (let number of numbers) {
    sumNumbers02 += number;
}

console.log(sumNumbers02)

// Nested loops

for (let i = 1; i <= 3; i++) {
    console.log("Outer", i)
    for (let j = 1; j <= 5; j++){
        console.log("\tInner", j)
    }
}