// TASK 01
console.log('-----TASK 01-----');

let rndm01 = Math.floor((Math.random() * 101) + 1), rndm02 = Math.floor((Math.random() * 101) + 1),rndm03 = Math.floor((Math.random() * 101) + 1);
let avgRndm = (rndm01 + rndm02 + rndm03) / 3;

console.log(rndm01);
console.log(rndm02);
console.log(rndm03);

if (avgRndm >= 50) console.log(true);
else console.log(false);
console.log()

// TASK 02
console.log('-----TASK 02-----');

let num01 = Math.floor((Math.random() * 3) + 1); num02 = Math.floor((Math.random() * 3) + 1), num03 = Math.floor((Math.random() * 3) + 1);

console.log(num01);
console.log(num02);
console.log(num03);

if (num01 === num02 && num01 === num03) console.log('TRIPLE MATCH');
else if (((num01 === num02 && num01 !== num03)) || ((num01 === num03 && num01 !== num02)) || ((num01 === num02) && (num02 !== num03)) || ((num02 === num03) && (num01 !== num03))) console.log('DOUBLE MATCH');
else console.log('NO MATCH');
console.log();

// TASK 03
console.log('-----TASK 03-----');

function strHasA (str) {
if (str.toLowerCase().includes('a')) return true;
else return false;
}

console.log(strHasA('GLOBAL'));
console.log();

// TASK 04
console.log('-----TASK 04-----');

function doubleOrTripleWord (str) {
    if (str.length % 2 === 0) return str + str + str;
    else return str + str;
}

console.log(doubleOrTripleWord('1'));
console.log();

// TASK 05
console.log('-----TASK 05-----');

function firstWord (str) {
    if (str.length > 0) return str.slice(0, str.indexOf(' '));
    else return null;
}

console.log(firstWord('New phone, who dis?'));
console.log();

// TASK 06
console.log('-----TASK 06-----');

function lastWord (str) {
    if (str.length > 0) return str.slice(str.lastIndexOf(' '), str.length - 1);
    else return null;
}

console.log(lastWord('New phone, who dis?'));
console.log();

// TASK 07
console.log('-----TASK 07-----');

function firstLastWord (str) {
    if (str.length > 0) return str.slice(0, str.indexOf(' ')) + str.slice(str.lastIndexOf(' '), str.length - 1);
    else return null;
}

console.log(firstLastWord('New phone, who dis?'));
console.log();

// TASK 08
console.log('-----TASK 08-----');

function startVowel (str) {
    if (str.toLowerCase().charAt(0) === 'a' || str.toLowerCase().charAt(0) === 'e' || str.toLowerCase().charAt(0) === 'i' || str.toLowerCase().charAt(0) === 'o' || str.toLowerCase().charAt(0) === 'u') return true;
    else return false;
}

console.log(startVowel('a Chicken'));
console.log();

// TASK 09
console.log('-----TASK 09-----');

function swap4 (str) {
    let first4 = str.slice(0, 4);
    let mid = str.slice(4, -4)
    let last4 = str.slice(-4);

    if (str.length >= 8) return last4 + mid + first4
    else return null;
}

console.log(swap4('TechGlobal'));
console.log();

// TASK 10
console.log('-----TASK 10-----');

function swapFirstAndLast (str) {

    let firstWord = ' ' + str.slice(0, str.indexOf(' '));
    let mid = str.slice(str.indexOf(' '), str.lastIndexOf(' '));
    let lastWord = str.slice(str.lastIndexOf(' '), str.length);

    if (str.includes(' ')) return lastWord + mid + firstWord;
    else return null;
}

console.log(swapFirstAndLast('New phone, who dis?'));
console.log();