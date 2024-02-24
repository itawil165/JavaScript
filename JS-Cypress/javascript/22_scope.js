// **GLOBAL SCOPE**
var city = 'Chicago';
const state = 'IL';
let country = 'USA';

console.log(city);
console.log(state);
console.log(country);

if (true) console.log(city, state, country)

// **FUNCTION SCOPE** (var, let, and const CANNOT be reference outside the function)

function sum (arr) {
    let total = 0; // belongs to sum function

    for (const number of arr) {
        total += number
    }
    return total;
}

// console.log(total); // ReferenceError: total is not defined
console.log(sum([1, 2, 3]));

// **BLOCK SCOPE** (var can be referenced outside the block but let and const CANNOT)
{
    var num01 = 1;
    let num02 = 2;
    const num03 = 3;
}

console.log(num01); // 1
// console.log(num02); // ReferenceError: num02 is not defined
// console.log(num03); // ReferenceError: num03 is not defined

// **LEXICAL SCOPE** (function within a function -- inner function can reference outer function but outer CANNOT reference inner function)

function outer () {
    let outerVariable = 'OUTER';

    function inner (){
        let innerVariable = 'INNER';
        console.log(innerVariable);
        console.log(outerVariable);
    }
    console.log(outerVariable); // OUTER
    // console.log(innerVariable); // ReferenceError: innerVariable is not defined

    inner(); // INNER OUTER
}
outer(); // OUTER


// **CLOSURE**

/*
let intialScore = 0;

function score () {
    
    return intialScore += 1;
}
console.log(score()); // 1
console.log(score()); // 2
console.log(score()); // 3
*/

function score () {
    let intialScore = 0; // cannot be accessed outside the function -- private
    
    const inner = function () {
        return intialScore += 1;
    }
    return inner;
}

const anyFunction = score(); // used to only invoke inner() so it doesn't reset initial score to 0 if score() is invoked

console.log(anyFunction()); // 1
console.log(anyFunction()); // 2
console.log(anyFunction()); // 3