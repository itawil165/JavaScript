// Correct way to declare variables

let name01 = 'John';

console.log(name01); // John

// Incorrect way to declare variables

console.log(name02); // error

let name02 = 'Alex';


// Hoisting using var/function

console.log(name03); // undefined

var name03 = 'Jane';

/*
ABOVE READ AS:

var name03;
console.log(name03);
name03 = 'Jane';
*/

console.log(sum(3, 5));

function sum (a, b) {
    return a + b;
}

console.log(sum(5, 5));

// BE CAREFUL WITH FUNCTION EXPRESSIONS OR ARROW FUNCTIONS

/*
IF FUNCTION IS CALLED BEFORE, IT WILL NOT WORK BECAUSE CONST/LET CANNOT BE HOISTED

myFunction01();
myFunction02();
*/

const myFunction01 = function () {
    console.log('FUNCTION 01')
}

const myFunction02 = () => console.log('FUNCTION 02')

myFunction01();
myFunction02();