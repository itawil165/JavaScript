// TASK 01
console.log('-----TASK 01-----');

function noSpace (str) {
    return spacesRemoved = str.trim().split(' ').join('');
}

console.log(noSpace(''));
console.log(noSpace('JavaScript'));
console.log(noSpace('   Hello   '));
console.log(noSpace(' Hello World '));
console.log(noSpace('Tech Global'));
console.log();

// TASK 02
console.log('-----TASK 02-----');

function replaceFirstLast (str) {
    const strToArr = str.trim().split('');

    if (str.length < 2) return '';

    let firstLetter = strToArr[0];
    let lastLetter = strToArr[str.length - 1];

    strToArr.pop();
    strToArr.push(firstLetter);

    strToArr.shift();
    strToArr.unshift(lastLetter);

    return strToArr.join('');
}

console.log(replaceFirstLast(''))
console.log(replaceFirstLast('Hello'))
console.log(replaceFirstLast('Tech Global'))
console.log(replaceFirstLast('A'))
console.log(replaceFirstLast('   A   '))
console.log();

// TASK 03
console.log('-----TASK 03-----');

function hasVowel (str) {
    if (str.toLowerCase().includes('a') || str.toLowerCase().includes('e') || str.toLowerCase().includes('i') || str.toLowerCase().includes('o') || str.toLowerCase().includes('u')) return true;
    else return false;
}

console.log(hasVowel(''));
console.log(hasVowel('JavaScript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
console.log(hasVowel('ABC'));
console.log();

// TASK 04
console.log('-----TASK 04-----');

function checkAge (num) {
    if (new Date().getFullYear() - num < 0 || new Date().getFullYear() - num > 120) return 'AGE IS NOT VALID'
    else if (new Date().getFullYear() - num < 16) return 'AGE IS NOT ALLOWED'
    else if (new Date().getFullYear() - num >= 16) return 'AGE IS ALLOWED'
}

console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));
console.log();

// TASK 05
console.log('-----TASK 05-----');

function averageOfEdges (s01, s02, s03) {
    let max = Math.max(Math.max(s01, s02), s03);
    let min = Math.min(Math.min(s01, s02), s03);

    return (max + min) / 2;
}

console.log(averageOfEdges(0, 0, 0));
console.log(averageOfEdges(0, 0, 6));
console.log(averageOfEdges(-2, -2, 10));
console.log(averageOfEdges(-3, 15, -3));
console.log(averageOfEdges(10, 13, 20));
console.log();

// TASK 06
console.log('-----TASK 06-----');

function noA (arr) {

    return arr.map (word => {
        if (word.toLowerCase()[0] === 'a') return '###';
        return word;
    })
}

console.log(noA(['javascript', 'hello', '123', 'xyz']));
console.log(noA(['apple', '123', 'ABC', 'javascript']));
console.log(noA(['apple', 'abc', 'ABC', 'Alex', 'A']));
console.log();

// TASK 07
console.log('-----TASK 07-----');

function no3and5 (arr) {

    return arr.map (num => {
        if (num % 3 === 0 && num % 5 === 0) return 101;
        if (num % 3 === 0) return 100;
        if (num % 5 === 0) return 99;        
        return num;
    })
}
console.log(no3and5([7, 4, 11, 23, 17]));
console.log(no3and5([3, 4, 5, 6]));
console.log(no3and5([10, 11, 12, 13, 14, 15]));
console.log();

// TASK 08
console.log('-----TASK 08-----');

function countPrimes (arr) {

    let count = 0;
    arr.map (num => {
        if (num >= 2 && num % 2 !== 0) count++;
    })
    return count;
}

console.log(countPrimes([-10, -3, 0, 1]));
console.log(countPrimes([7, 4, 11, 23, 17]));
console.log(countPrimes([41, 53, 19, 47, 67]));
console.log();

// TASK 09
console.log('-----TASK 09-----');

function removeDuplicates (arr) {

    const noDupes = [];
    for (i = 0; i <= arr.length; i++){
        for (j = i + 1; j <= arr.length; j++){
            if (arr[i] !== arr[j] && !noDupes.includes(arr[i])) noDupes.push(arr[i]);
        }
    }
    return noDupes;
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(['abc', 'xyz', '123', 'ab', 'abc', 'ABC']));
console.log(removeDuplicates(['1', '2', '3', '2', '3']));
console.log();

// TASK 10
console.log('-----TASK 10-----');

function isDateFormatValid (str) {

    if (!str.includes('/')) return false;

    let beginning = str.split('/')[0];
    let middle = str.split('/')[1];
    let end = str.split('/')[2];

    if (beginning.length < 2 || middle.length < 2 || end.length < 2) return false;
    if (beginning > 12 || middle > 31) return false;
    else return true;
}

console.log(isDateFormatValid(''));
console.log(isDateFormatValid('15/30/2020'));
console.log(isDateFormatValid('10-30-2020'));
console.log(isDateFormatValid('10.30.2020'));
console.log(isDateFormatValid('5/30/2020'));
console.log(isDateFormatValid('05/30/2020'));
console.log(isDateFormatValid('10/2/2020'));
console.log(isDateFormatValid('10/02/2020'));
console.log();

// TASK 11
console.log('-----TASK 11-----');

function secondMax (arr) {
    let max = arr[0];
    let secondMax;

    for (num of arr) {
        if (num > max) {
            secondMax = max;
            max = num
        } else if (num > secondMax && num !== max) secondMax = max;
    }
    return secondMax || max;
}

// OR using sort()

function secondMaxSort (arr) {
    const sortedArr = arr.sort((a, b) => b - a) // a - b sorts ascending while b - a sorts descending

    for (num of sortedArr) {
        if (num !== sortedArr[0]) return num;
    }
    return sortedArr[0];
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMaxSort([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMax([3, 4, 5, 6]));
console.log(secondMaxSort([3, 4, 5, 6]));
console.log(secondMax([10]));
console.log(secondMaxSort([10]));
console.log();

// TASK 12
console.log('-----TASK 12-----');

function secondMin (arr) {
    const sortedArr = arr.sort((a, b) => a - b) // a - b sorts ascending while b - a sorts descending

    for (num of sortedArr) {
        if (num !== sortedArr[0]) return num;
    }
    return sortedArr[0];
}

console.log(secondMin([7, 4, 4, 4, 23, 23, 23]));
console.log(secondMin([3, 4, 5, 6]));
console.log(secondMin([10]));
console.log();

// TASK 13
console.log('-----TASK 13-----');

function mostRepeated (arr) {

let counts = {};
let largestCount = 0;
let mostRepeated;

    for (element of arr) {
        if (counts[element]) {
            counts[element]++;
        } else {
            counts[element] = 1;
        }

        if (counts[element] > largestCount) {
            largestCount = counts[element];
            mostRepeated = element
        }
    }
return mostRepeated;
}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]));
console.log(mostRepeated(['pen', 'pencil', 'pen', '123', 'abc', 'pen', 'pencil']));
console.log(mostRepeated([10]));
console.log(mostRepeated(['TechGlobal']));
console.log();