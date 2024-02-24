exports.add = (...args) => {
    let sum = 0;
    for (const number of args) {
        sum += number;
    }
    return sum;
};
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
module.exports.getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start +1 )) + start;
module.exports.average = (...args) => {
    let sum = 0;
    for (const number of args) {
        sum += number;
    }
    return sum / args.length;
}


/*
Ways to export:

// 1-
module.exports.add = add;
module.exports.multiply = multiply;
module.exports.divide = divide;

// 2-
exports.add = add;
exports.multiply = multiply;
exports.divide = divide;

// 3-
const math = {
    add,
    multiply,
    divide
};

module.exports = math;
*/