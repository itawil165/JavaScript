// **DESTRUCTURING ARRAYS**
// If we wanted to reassign elements normally
const capitals = ['Washington', 'Madrid', 'Berlin', 'Paris']

const capitalUSA = capitals[0];
const capitalSpain = capitals[1];
const capitalGermany = capitals[2];
const capitalFrance = capitals[3];

console.log('---NOT using destructuring---')
console.log(capitalUSA);
console.log(capitalSpain);
console.log(capitalGermany);
console.log(capitalFrance);

// We can use destructuring to make the same process cleaner
const [capUSA, capSpain, capGermany, capFrance] = capitals;
console.log('---Using destructuring---')
console.log(capUSA);
console.log(capSpain);
console.log(capGermany);
console.log(capFrance);

// Syntax used to skip elements
console.log('---Using destructuring and skipping elements---')
const [, cSpain, , cFrance] = capitals;
console.log(cSpain);
console.log(cFrance);


// **DESTRUCTURING OBJECTS**

const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25
};

const {fName, lName, age} = person;

if (fName.startsWith('J')) console.log('JAYYY');
else console.log('YAYYY');

for (const letter of fName.split('')) {
    console.log(letter);
}

console.log(`${fName} ${lName} is ${age}.`)