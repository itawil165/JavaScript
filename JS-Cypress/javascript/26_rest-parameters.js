function multiply (...args) {
    let result = 1;
    for (const number of args) {
        result *= number;
    }
    return result;
}

console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 10));
console.log(multiply(1, 2, 10, 5));
console.log(multiply(1, 2, 10, 5, 3));




function sum (num01, ...rest) {
    let result = num01;
    for (const number of rest) {
        result += number;
    }
    return result;
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 10));
console.log(sum(1, 2, 10, 5));
console.log(sum(1, 2, 10, 5, 3));