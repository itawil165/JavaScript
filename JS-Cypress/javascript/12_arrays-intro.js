const numbers = [15, 23, 32];
const cities = ['Madrid', 'Rome', 'Barcelona'];

console.log(numbers);
console.log(cities);

// Access certain elements
console.log(numbers[2]);
console.log(cities[cities.length - 1]);

// Update elements
cities[1] = 'Milan';
console.log(cities);
console.log(cities[1]);

// Iterate elements with for-of loop
for (let city of cities) {
    console.log(city);
}

/*
    Store numbers in an array
    Calculate their sum
    Count even numbers

    -2, 10, 0, 3, 13, 17, 1000
    */

const nums = [-2, 10, 0, 3, 13, 17, 1000]

let sum = 0;
let countEven = 0;

for (const num of nums) {
    sum += num;
    if (num % 2 === 0) countEven++;
}

console.log(sum);
console.log(countEven);

console.log(nums.filter(x => x % 2 === 0)); // use filter to simplify data

// Popping and Pushing array elements
const arr = [];
console.log(arr.length);

arr.push('Pencil', 'Pen', 'Eraser', 'Phone'); // adds elements to end of array, also returns new array length
console.log(arr);

arr.unshift('Sticky Notes'); // adds elements to front of array, also returns new array length
console.log(arr);

arr.pop(); // removes elements from end of array, also returns removed element
console.log(arr);

arr.shift(); // removes elements from front of array, also returns removed element
console.log(arr);

// Splicing arrays
arr.splice(1, 0, "Marker"); // add "Marker" into array at 1st index
console.log(arr);

arr.splice(2, 1); // remove 1 element at 2nd index
console.log(arr);

// Searching arrays
const favNumbers = [7, 5, 8, 10, 15, 10];
console.log(favNumbers.indexOf(10));
console.log(favNumbers.lastIndexOf(10)); 
console.log(favNumbers.indexOf(12)); // indexOf and lastIndexOf will return -1 if element does not exist in array


console.log(favNumbers.includes(5)); //true
console.log(favNumbers.includes(15)); // true
console.log(favNumbers.includes(50)); // false
console.log(favNumbers.includes(100)); // false

// Reversing arrays
const newArr = [1, 5, -3, 100];
console.log(newArr);

const reversedNewArr = newArr.reverse();
console.log(reversedNewArr);

// Multi-dimensional array
const multi = [
    ['Phone', 'Computer'],
    ['Cup', 'Fork', 'Spoon', 'Knife'],
    ['Mouse']
];

console.log(multi[1][2]); // returns specific element from specific array

for (const arr of multi) {
    console.log('The inner array', arr);
    for (const obj of arr) {
        console.log('\tElement', obj)
    }
}

const multiFlat = multi.flat(); // flatten multi-dimensional array into a single array
console.log(multiFlat);

// toString and join for arrays
const lastArray = [5, 10, 20, 45];
console.log(lastArray.toString());
console.log(lastArray.join());
console.log(lastArray.join(" | ")); // join takes argument for specified separator between array elements