const car = {
    color: 'red',
    make: 'BMW',
    model: 'X6',
    year: 2023
};

console.log(car);

const keys = Object.keys(car);
const values = Object.values(car);
const entries = Object.entries(car);

console.log(keys);
console.log(values);
console.log(entries);

for (const key of Object.keys(car)) {
    console.log(`Keys: ${key}`);
}

for (const value of Object.values(car)) {
    console.log(`Values: ${value}`);
}

for (const [key, value] of Object.entries(car)) {
    console.log(`Entries: ${key} ${value}`);
}