// TASK 01
console.log('-----TASK 01-----');

for (i = 1; i <= 100; i++ ){
    if (i % 7 == 0) console.log(i);
}

console.log();

// TASK 02
console.log('-----TASK 02-----');

for (i = 1; i <= 50; i++) {
    if (i % 2 == 0 && i % 3 == 0) console.log(i);
}

console.log();

// TASK 03
console.log('-----TASK 03-----');

for (i = 100; i >= 50; i--) {
    if (i % 5 == 0) console.log(i);
}

console.log();

// TASK 04
console.log('-----TASK 04-----');

for (i = 1; i <=7; i++) {
    console.log('The square of ' + i + ' is ' + (i**2));
}

console.log();

// TASK 05
console.log('-----TASK 05-----');

let sum = 0;

for (i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);
console.log();

// TASK 06
console.log('-----TASK 06-----');

let rndmFactorial = Math.floor((Math.random() * 11) + 1);
let factorial = rndmFactorial;

for (let i = 1; i < rndmFactorial; i++) {
    factorial *= i;
}

console.log(rndmFactorial);
console.log(factorial);
console.log();

// TASK 07
console.log('-----TASK 07-----');

let rndmDivBy5 = 0, count5 = 1;

for (let i = 1; i <= 100; i++) {
    rndmDivBy5 = Math.floor((Math.random() * 101) + 1);
    if (rndmDivBy5 % 5 == 0) {
        console.log('The random number generated is ' + rndmDivBy5 + ' and it took ' + count5 + ' attempts')
        break;
    }
    count5++;
}

console.log();

// TASK 08
console.log('-----TASK 08-----');

const countryArr = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countryArr);
console.log(countryArr.sort());
console.log();

// TASK 09
console.log('-----TASK 09-----');

let dogArr = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
if (dogArr.includes('Pluto')) console.log(true);
else console.log(false);

console.log();

// TASK 10
console.log('-----TASK 10-----');

const catArr = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
console.log(catArr.sort());

if (catArr.includes('Garfield') && catArr.includes('Felix')) console.log(true);
else console.log(false);

console.log();

// TASK 11
console.log('-----TASK 11-----');

const numArr = [10.5, 20.75, 70, 80, 15.75];
console.log(numArr);

for (i = 0; i <= numArr.length; i++) {
    console.log(numArr[i])
}
console.log();

// TASK 12
console.log('-----TASK 12-----');

const deskArr = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let bpCount = 0, wordCount = 0;

for (const desk of deskArr) {
    if (desk.toLowerCase().startsWith('b') || desk.toLowerCase().startsWith('p')) bpCount++;
    if (desk.toLowerCase().includes('book') || desk.toLowerCase().includes('pen')) wordCount++;
}

console.log(deskArr);
console.log('Elements starting with \'B\' or \'P\' ' + bpCount);
console.log('Elements having \'book\' or \'pen\' in it ' + wordCount);
console.log();

// TASK 13
console.log('-----TASK 13-----');

const numberArr = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

let greaterThan10Count = 0, lessThan10Count = 0, equalTo10Count = 0;

for (const number of numberArr) {
    if (number > 10) greaterThan10Count++;
    if (number < 10) lessThan10Count++;
    if (number == 10) equalTo10Count++;
}

console.log(numberArr);
console.log('The number of elements greater than 10 are ' + greaterThan10Count);
console.log('The number of elements less than 10 are ' + lessThan10Count);
console.log('The number of elements euqal to 10 are ' + equalTo10Count);

console.log();

// TASK 14
console.log('-----TASK 14-----');

const ascendArr01 = [5, 8, 13, 1, 2];
const ascendArr02 = [9, 3, 67, 1, 0];
const greaterArr = [];

for (i = 0; i < ascendArr01.length; i++) {
    greaterArr.push(Math.max(ascendArr01[i], ascendArr02[i]));
}

console.log(ascendArr01);
console.log(ascendArr02);
console.log(greaterArr);
console.log();

// TASK 15
console.log('-----TASK 15-----');

function firstDuplicate (arr) {
    for (let i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return arr[i];
        }
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5, '5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', '123', 'bar']));
console.log();

// TASK 16
console.log('-----TASK 16-----');

function getDuplicate (arr) {
    let dupes = [];

    for (let i = 0; i < arr.length; i++){
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !dupes.includes(arr[i])) dupes.push(arr[i]);
        }
    }
    return dupes;
}

console.log(getDuplicate([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicate([1, 2, 5, 0, 7]));
console.log(getDuplicate(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo']));
console.log(getDuplicate(['foo', '12' , 12, 'bar', 'a']));
console.log();

// TASK 17
console.log('-----TASK 17-----');

function reverseString (str) {
    let strArr = str.trim().split(' ');

    for (let i = 0; i < strArr.length; i++){
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ');
}

console.log(reverseString('Hello World'))
console.log(reverseString('I like JavaScript'));
console.log(reverseString('Hello'));
console.log(reverseString(''));
console.log(reverseString('     '));

// TASK 18
console.log('-----TASK 18-----');

function getEven (num01, num02) {
    let numArr = [];
    let startNum = Math.min(num01, num02);
    let endNum = Math.max(num01, num02);

    for (let i = startNum; i <= endNum; i++){
        if (i % 2 === 0) numArr.push(i);
    }
    return numArr;
}

console.log(getEven(2, 7));
console.log(getEven(17, 5));
console.log(getEven(4, 4));
console.log(getEven(3, 3));
console.log();

// TASK 19
console.log('-----TASK 19-----');

function getMulipleOf5 (num01, num02) {
    let numArr = [];
    let startNum = Math.min(num01, num02);
    let endNum = Math.max(num01, num02);

    for (let i = startNum; i <= endNum; i++){
        if (i % 5 === 0) numArr.push(i);
    }
    return numArr;
}

console.log(getMulipleOf5(3, 17));
console.log(getMulipleOf5(23, 5));
console.log(getMulipleOf5(5, 5));
console.log(getMulipleOf5(2, 4));
console.log();

// TASK 20
console.log('-----TASK 20-----');

function fizzBuzz (num01, num02) {
    let numArr = [];
    let startNum = Math.min(num01, num02);
    let endNum = Math.max(num01, num02);

    for (let i = startNum; i <= endNum; i++){
        if (i % 3 === 0 && i % 5 === 0) numArr.push('FizzBuzz');
        else if (i % 3 === 0) numArr.push('Fizz');
        else if (i % 5 === 0) numArr.push('Buzz');
        else numArr.push(i);
    }
    return numArr.join(' | ');
}

console.log(fizzBuzz(13,18));
console.log(fizzBuzz(12,5));
console.log(fizzBuzz(5,5));
console.log(fizzBuzz(9,6));
console.log();