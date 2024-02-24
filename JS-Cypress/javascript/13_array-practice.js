/*
    Find first positve element -> 3
    Find first negative element -> -9
    Find first odd element -> 3
*/

const numbers= [0, 3, -9, 5, 8];

let firstPos, firstNeg, firstOdd;

for (const num of numbers) {
    if (num > 0) {
        firstPos = num;
        break;
    }
}

for (const num of numbers) {
    if (num < 0) {
        firstNeg = num;
        break;
    }
}

for (const num of numbers) {
    if (num % 2 !== 0) {
        firstOdd = num;
        break;
    }
}

// GET CLASS SOLUTION FROM GITHUB

console.log(firstPos);
console.log(firstNeg);
console.log(firstOdd);