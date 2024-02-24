const person = {
    fName: 'John',
    lName: 'Doe',
    age: 25,
    address: 'Chicago',
    fullName: function () {
        return `${this.fName} ${this.lName}`;
    },
    info: function () {
        return `${this.fullName()}'s age is ${this.age} and address is ${this.address}.`
    }
};

console.log(person);
console.log(person.fullName());
console.log(person.info());