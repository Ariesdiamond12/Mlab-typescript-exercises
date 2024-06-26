"use strict";
class Person {
    constructor(name, age, socialSecurityNumber) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }
    firsrName() {
        return this.name;
    }
}
const person = new Person("Tumi", 23, 1204);
person.name = "Tumi";
person.age = 23;
