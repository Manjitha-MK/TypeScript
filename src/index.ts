let Name: string = "Manjitha";
let age: number = 24;
let isStudent: boolean = true;

let hobbies: string[] = ["Coding", "Reading", "Volley Ball", "Cricket"];
let marks: number[] = [90,87,98];

let user : {name: string, age: number | string} = {
    name: "Manjitha Kaluarachichi",
    age: "24 years old"
};

function multiply(a: number, b: number): number{
    return a * b ;
}

let userInfo: [string, number] = ["Kamal", 20];

enum Role {
    Admin,
    User,
    Guest,
    Customer
}
let myRole: Role =  Role.Customer;

console.log(Name, age, isStudent, hobbies, marks, user);
console.log("multiply:",multiply(3,4));
console.log("user:",userInfo[0], "Age:",userInfo[1]);
console.log("My role:",myRole);


let score: number = 86;

if(score >= 90){
    console.log("Grade: A");
}
else if(score >= 75){
    console.log("Grade: B");
}
else if(score >= 60){
    console.log("Grade C");
}
else{
    console.log("Grade F")
}

for (let i=1; i<=5; i++){
    console.log("Number:",i);
}

let i=1;
while(i<=5){
    console.log("While loop number:",i);
    i++;
}


