function multiply01 (num01, num02) {
    return num01 * num02;
}

console.log(multiply01(2, 3)); // 6
console.log(multiply01(4, 3)); // 12
console.log(multiply01(2)) // 2 * NaN 

// **Default parameters**
function multiply02 (num01 = 0, num02 = 1) {
    return num01 * num02;
}

console.log(multiply02()); // 0
console.log(multiply02(2)); // 2