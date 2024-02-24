let company = "TechGlobal";

console.log(company.length); // 10
console.log(company.toUpperCase()); // TECHGLOBAL
console.log(company.toLowerCase()); // techglobal

// charAt vs array index
console.log(company.charAt(0)); // T
console.log(company.charAt(3)); // h

console.log(company[0]); // T
console.log(company[3]); // h

// In Java, you would get OutOfBounds exception, JavaScript return empty
console.log(company.charAt(-10));
console.log(company.charAt(100));

// JavaScript will return undefined when using index array
console.log(company[-10]);
console.log(company[100]);

// ASCII decimal representation
console.log(company.charCodeAt(0)); // 84 is the ASCII decimal representaion of T

// includes
console.log("Chicago".includes('C')); // true
console.log("Chicago".includes('c')); // true
console.log("Chicago".includes('A')); // false

// startsWith and endsWith
console.log("Illinois".startsWith('I')); // true
console.log("Illinois".startsWith('i')); // flase
console.log("Illinois".endsWith('Illinois')); //true
console.log("Illinois".startsWith('Illinois')); // true

// index and search
console.log(company.indexOf('l')); // 5
console.log(company.lastIndexOf('l')); // 9
console.log(company.search('l')); // 5

// Will return -1 since the char doesn't exist in the string
console.log(company.indexOf('Y'));
console.log(company.lastIndexOf('Y'));
console.log(company.search('Y'));

// trim
console.log("     John     ".trim());
console.log("     John     ".trimStart());
console.log("     John     ".trimEnd());

// substring and slice
let word = "JavaScript";

console.log(word.substring(0, 4));
console.log(word.substring(4));

console.log(word.slice(0, 4));
console.log(word.slice(4));

// Split
let split01 = "Java".split(""); // will split word at each "" into an array
console.log(split01);

let split02 = "Not Java but JavaScript".split(" "); // will split word at each " " into an array
console.log(split02);

// Replace
console.log("Java or JavaScirpt".replace("Java", "####")); // replaces first occurence ONLY
console.log("Java or JavaScirpt".replaceAll("Java", "####"));

// Padding
let id01 = "1", id02 = "123";
console.log(id01.padStart(6, "0")); // (length desired, pad with)
console.log(id02.padStart(6, "0"));