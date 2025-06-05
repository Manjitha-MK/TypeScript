"use strict";
// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(greet("TypeScript"));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
    }
}
const P = new Person("Manjitha", 22);
P.greet();
