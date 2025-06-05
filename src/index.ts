
class Person {
    constructor (public name: string , private age: number){}

    greet(){
        console.log(`Hello I am ${this.name} and I am ${this.age} years old.`);
    }
}

const P = new Person ("Manjitha",22);
P.greet();