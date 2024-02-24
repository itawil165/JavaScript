/*
    Write a function that takes 2 arguments and returns their sum.

    In Java:

    public static int sum (int a, int b){
        return a + b;
    }
*/

function sum (a, b) {
    return a + b;
}

let var01 = sum(3, 5);

console.log(var01);
console.log(sum(10, 5));



/*
    Write a function that takes an array and retruns the max value
*/

function max (arr) {
    if (arr.length === 0) console.error('This array is empty')
    let max = -Infinity;

    for (const num of arr) {
        if (num > max) max = num;
    }

    return max;
}

console.log(max([2, 5, 100]));