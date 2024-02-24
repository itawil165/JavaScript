const strings = ['abc', 'Alex', 'Chicago', 'james']; // Alex, Chicago, abc, james - sorted based off of ASCII deciaml values

strings.sort();
console.log(strings);

const salaries = [10000, 5000, 25, 0];

salaries.sort();
console.log(salaries); // sorts like a string - based on the first number/letter

salaries.sort((n1, n2) => n1 - n2);
console.log(salaries);