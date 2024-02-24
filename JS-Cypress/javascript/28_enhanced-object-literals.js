const fName = 'John';
const lName = 'Doe';

/*
BEFORE ES6

const person = {
    fName: fName,
    lName: lName,
    age: 25
}

const instructor = {
    fName: fName,
    lName: lName,
    age: 45,
    field: 'Science',
    university: 'UIC'
}
*/

// AFTER ES6
const person = {
    fName,
    lName,
    age: 25
}

const instructor = {
    fName,
    lName,
    age: 45,
    field: 'Science',
    university: 'UIC'
}

console.log(person);
console.log(instructor);