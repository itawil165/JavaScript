const instructor = {
    fName: 'John',
    lName: 'Doe',
    age: 45,
    field: 'Science',
    university: 'UIC',
    info: function () {
        return this;
    },
    fullName: function () {
        return `${this.fName} ${this.lName}`
    }
}

console.log(instructor.info());
console.log(instructor.fullName());