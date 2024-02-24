let fname = "John";
let lname = "Doe";
let yearOfBirth = 1990;

// Using (double) quotes
console.log(fname + " " + lname + " is " + (new Date().getFullYear() - yearOfBirth) + " years old");

// Using backticks
console.log(`${fname} ${lname} is ${new Date().getFullYear() - yearOfBirth} years old`);