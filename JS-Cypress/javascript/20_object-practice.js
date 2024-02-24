const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching Movies'],
    exam_scores: {
        midterm: 60,
        final: 90
    }
}

console.log(student);

/*
    Print hobbies -> ['Soccer', 'Watching Movies']
    Print exam scores -> { midterm: 60, final: 90 }
    Print Soccer
*/

console.log(student.hobbies);
console.log(student.exam_scores);
console.log(student.hobbies[0]);

console.log((student.exam_scores.midterm + student.exam_scores.final) / 2);


const books = [
    {
        name: 'Amok',
        author: {
            fname: 'Stefan',
            lName: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name Is Red',
        author: {
            fname: 'Orhan',
            lName: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            fname: 'George',
            lName: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }
];

// Count the books where Author first name has an 'a' -> 2

// Using loop
let aCount01 = 0;

for (const book of books) {
    if (book.author.fname.toLowerCase().includes('a')) aCount01++;
}
console.log(aCount01);

// Using filter()
const aCount02 = books.filter(book => book.author.fname.includes('a')).length;
console.log(aCount02);

// Using reduce()
let aCount03 = 0;

books.reduce((count, book) => {
    if (book.author.fname.toLowerCase().includes('a')) return aCount03++;
    else return aCount03

}, 0);
console.log(aCount03);