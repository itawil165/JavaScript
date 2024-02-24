// falsy values = false, 0, NaN, null, undefined, '', or  ""
// truthy values = true, any non-zero number, any non-empty string

if (NaN) {
    console.log('Hello');
}
else {
    console.log('World');
}

// ?? will only consider null or undefined as false
console.log('' ?? 'Hello'); // empty
console.log('abc' ?? 'Hello'); // abe
console.log(null ?? 'Hello'); // Hello
console.log(undefined ?? 'Hello'); // Hello

// || will follow the truthy/fasly logic
console.log('' || 'Hello'); // Hello
console.log('abc' || 'Hello'); // Habc
console.log(null || 'Hello'); // Hello
console.log(undefined || 'Hello'); // Hello