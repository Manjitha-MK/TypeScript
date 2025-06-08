let Name: string = "Manjitha";
let age: number = 24;
let isStudent: boolean = true;

let hobbies: string[] = ["Coding", "Reading", "Volley Ball", "Cricket"];
let marks: number[] = [90,87,98];

let user : {name: string, age: number | string} = {
    name: "Manjitha Kaluarachichi",
    age: 24 + " years old"
};

function multiply(a: number, b: number): number{
    return a * b ;
}

console.log(Name, age, isStudent, hobbies, marks, user);
console.log("multiply: ",multiply(3,4));