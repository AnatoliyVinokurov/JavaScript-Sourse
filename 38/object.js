const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
person.age = 36;
console.log(person.age);
console.log(person);
console.log(person.fullName());
console.log(person.hobby);
person.hobby = 'chess';
console.log(person.hobby);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`
}
console.log(peter.fullName());
const mary = new Person('Mary', 'Smith', 18);
console.log(mary);
console.log(mary.fullName());

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}