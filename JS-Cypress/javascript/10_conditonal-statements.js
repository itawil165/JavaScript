// if-else statement
if (true === (4 * 2 === 8)) {
    console.log("Block 1");
}
else {
    console.log("Blcok 2");
}

let number = Math.floor(Math.random() * 10) - 5;
console.log(number);

if (number < 0) console.log("Negative");
else if (number > 0) console.log("Positive");
else console.log("Zero");

// ternary statement
let result01 = true === (4 * 2 ===8) ? "Block 1" : "Block 2";
let result02 = number < 0 ? "Negative" : number > 0 ? "Postive" : "Zero";
console.log(result01);
console.log(result02);


// Switch statements
let age = 15;

switch (true) {

    case age > 0 && age < 16:
        console.log("Too young to qualify");
        break;
    case age > 16:
        console.log("Old enough to qualify");
        break;
    default:
        console.log("Age cannot be negative!");
}