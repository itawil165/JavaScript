// TASK 01
console.log('-----TASK 01-----');

function countPositive (arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++;
    }
    return count;
}

console.log(countPositive([-45, 0, 0, 34, 5, 67]));
console.log(countPositive([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPositive([0, -1, -2, -3]));
console.log();

// TASK 02
console.log('-----TASK 02-----');

function countA (str) {
    let count = 0;
    const strToArr = str.toLowerCase().split('');

    for (i = 0; i < strToArr.length; i++){
        if (strToArr[i] === 'a') count++;
    }
    return count;
}

console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
console.log(countA('Cypress'));
console.log();

// TASK 03
console.log('-----TASK 03-----');

function countVowels (str) {
    let count = 0;
    const strToArr = str.toLowerCase().split('');

    for (i = 0; i < strToArr.length; i++){
        if (strToArr[i] === 'a' || strToArr[i] === 'e' || strToArr[i] === 'i' || strToArr[i] === 'o' || strToArr[i] === 'u') count++;
    }
    return count;
}

console.log(countVowels('Hello'));
console.log(countVowels('Hello World'));
console.log(countVowels('JavaScript is fun'));
console.log(countVowels(''));
console.log();

// TASK 04
console.log('-----TASK 04-----');

function countConsonants (str) {
    let count = 0;
    const strToArr = str.toLowerCase().split('');

    for (i = 0; i < strToArr.length; i++){
        if (strToArr[i] !== 'a' && strToArr[i] !== 'e' && strToArr[i] !== 'i' && strToArr[i] !== 'o' && strToArr[i] !== 'u') count++;
    }
    return count;
}

console.log(countConsonants('Hello'));
console.log(countConsonants('Hello World'));
console.log(countConsonants('JavaScript is fun'));
console.log(countConsonants(''));
console.log();

// TASK 05
console.log('-----TASK 05-----');

function countWords (str) {
    const strToArr = str.trim().toLowerCase().split(' ');
    return strToArr.length;
}

console.log(countWords('     Javascript is fun     '));
console.log(countWords('Cypress is a UI automation tool.     '));
console.log(countWords('1 2 3 4'));
console.log();

// TASK 06
console.log('-----TASK 06-----');

function factorial (num) {
    let factorial = 1;
    for (i = 1; i <= num; i++){
    factorial *= i;
    }
    return factorial;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
console.log();

// TASK 07
console.log('-----TASK 07-----');

function isPalindrome (str) {

    let string = str.toLowerCase().toString();
    let reversedString = str.toLowerCase().split('').reverse().join('').toString();

    if (string === reversedString) return true;
    else return false;
}

console.log(isPalindrome('Hello'))
console.log(isPalindrome('Kayak'))
console.log(isPalindrome('civic'))
console.log(isPalindrome('abba'))
console.log(isPalindrome('ab a'))
console.log(isPalindrome('123454321'))
console.log(isPalindrome('A'))
console.log(isPalindrome(''))
console.log();

// TASK 08
console.log('-----TASK 08-----');

function countMultipleWords (arr) {
    let count = 0;

    for (element of arr) {
        if (element.trim().includes(' ')) count++;
    }
    return count;
}

console.log(countMultipleWords(['foo', '', ' ', 'foo bar', ' foo']));
console.log(countMultipleWords(['foo', 'bar', 'foobar', ' foobar ']));
console.log(countMultipleWords(['f o o', 'b a r', 'foo bar', ' foo bar ']));
console.log(countMultipleWords([]));
console.log();

// TASK 09
console.log('-----TASK 09-----');

function count3OrLess (str) {
    let count = 0;
    const strToArr = str.split(' ');

    for (element of strToArr) {
        if (element.length <= 3 && element !== '') count++;
    }
    return count;
}

console.log(count3OrLess('Hello'));
console.log(count3OrLess('Hi John'));
console.log(count3OrLess('JavaScript is fun'));
console.log(count3OrLess('My name is John Doe'));
console.log(count3OrLess(''));
console.log();

// TASK 10
console.log('-----TASK 10-----');

function isPrime (num) {
    if (num > 1 && num % num === 0) return true;
    else return false;
}
console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));
console.log();

// TASK 11
console.log('-----TASK 11-----');

function add (arr01, arr02) {
    const sumArr = [];
    let biggerArr = Math.max(arr01.length, arr02.length);

    for (i = 0; i < biggerArr; i++) {
        if (arr01.length < arr02.length) arr01.push(0);
        if (arr01.length > arr02.length) arr02.push(0);
        sumArr.push(arr01[i] + arr02[i]);
    }
    return sumArr;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2]));
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11]));
console.log();

// TASK 12
console.log('-----TASK 12-----');

function removeExtraSpaces (str) {
    return spacesRemoved = str.trim().split(' ').filter(space => space.length > 0).join(' ');
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('     Hello   World     '));
console.log(removeExtraSpaces('   JavaScript   is   fun   '));
console.log(removeExtraSpaces(''));
console.log();

// TASK 13
console.log('-----TASK 13-----');

function findClosestTo10 (arr) {
    let closest = Number.MAX_VALUE;

    for (let num of arr) {
        if (num === 10) continue;

        if ((Math.abs(num - 10) < Math.abs(closest - 10))) {
            closest = num;
        }
    }
    return closest;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57]));
console.log(findClosestTo10([10, -13, 8, 12, 15, -20]));
console.log(findClosestTo10([0, -1, -2]));
console.log();

// TASK 14
console.log('-----TASK 14-----');

function isValidEmail (email) {

    if (email.includes(' ')) return false;
    if (email.split('@').length !== 2) return false;

    const beginning = email.split('@')[0];
    const middle = email.split('@')[1].split('.')[0];
    const end = email.split('@')[1].split('.')[1];

    if (beginning === undefined || middle == undefined || end === undefined) return false;

    return (beginning.length >= 2 && middle.length >= 2 && end.length >= 2)
}
 
console.log(isValidEmail(''));
console.log(isValidEmail('@gmail.com'));
console.log(isValidEmail('johndoe@yahoo'));
console.log(isValidEmail('johndoe@.com'));
console.log(isValidEmail('a@outlook.com'));
console.log(isValidEmail('johndoe@a.com'));
console.log(isValidEmail('johndoe@@gmail.com'));
console.log(isValidEmail('johndoe@gmail.com'));
console.log();

// TASK 15
console.log('-----TASK 15-----');

function isValidPassword (password) {

    if (password.includes(' ')) return false;
    if (password.length < 8 || password.length > 16) return false;

    let hasUppercase = false, hasLowercase = false, hasDigit = false, hasSpecial = false;

    for (char of password) {
        if (char >= 'A' && char <= 'Z') hasUppercase = true;
        else if (char >= 'a' && char <= 'z') hasLowercase = true;
        else if (char >= '0' && char <= '9') hasDigit = true;
        else hasSpecial = true;
    }
    return (hasUppercase && hasLowercase && hasDigit && hasSpecial)
}

console.log(isValidPassword(''));
console.log(isValidPassword('abcd'));
console.log(isValidPassword('abcd1234'));
console.log(isValidPassword('Abcd1234'));
console.log(isValidPassword('Chicago12345US!#$%'));
console.log(isValidPassword('Abcd1234$'));
console.log(isValidPassword('Chicago123$'));
console.log(isValidPassword('Test1234#'));
console.log();