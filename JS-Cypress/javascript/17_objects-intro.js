const course = {
    name: 'Cypress automation using JS',
    participants: 20,
    isOnline: true
};

// Accessing object key-values
console.log(course.name);
console.log(course.participants);
console.log(course.isOnline);
// OR
console.log(course['name']);
console.log(course['participants']);
console.log(course['isOnline']);

// Adding a new property
course.isFinished = false;
console.log(course);

// Remove an existing property
delete course.isOnline;
console.log(course);

// Update and existing property
course.isFinished = true;
console.log(course);

// for-in loop
for (const variable in course) {
    console.log(course[variable]);
};

for (const [key, value] of Object.entries(course)){
    console.log(`${key} is ${value}`);
}