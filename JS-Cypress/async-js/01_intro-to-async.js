// Synchronous code
console.log('Hello World');
console.log('JavaScript');

const print1 = () => console.log('1');
const print2 = () => console.log('2');

print1();
print2();

// Asynchronous code
function connectToDB() { // What if this delays and it has dependants?
    setTimeout(() => {
        
    console.log('CONNECTED TO DATABASE')
    }, 3000);
};

function fecthData() {
    console.log('DATA RETURNED')
};

connectToDB();
fecthData();