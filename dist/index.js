"use strict";
let Name = "Manjitha";
let age = 24;
let isStudent = true;
let hobbies = ["Coding", "Reading", "Volley Ball", "Cricket"];
let marks = [90, 87, 98];
let user = {
    name: "Manjitha Kaluarachichi",
    age: "24 years old"
};
function multiply(a, b) {
    return a * b;
}
let userInfo = ["Kamal", 20];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
    Role[Role["Customer"] = 3] = "Customer";
})(Role || (Role = {}));
let myRole = Role.Customer;
console.log(Name, age, isStudent, hobbies, marks, user);
console.log("multiply:", multiply(3, 4));
console.log("user:", userInfo[0], "Age:", userInfo[1]);
console.log("My role:", myRole);
let score = 86;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 75) {
    console.log("Grade: B");
}
else if (score >= 60) {
    console.log("Grade C");
}
else {
    console.log("Grade F");
}
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
let i = 1;
while (i <= 5) {
    console.log("While loop number:", i);
    i++;
}
for (let hobby of hobbies) {
    console.log("Hobby:", hobby);
}
function printEvenNumbers(numbers) {
    for (let num of numbers) {
        if (num % 2 === 0) {
            console.log("Even:", num);
        }
    }
}
printEvenNumbers([10, 20, 21, 23, 24, 50]);
function calculateAverage(marks) {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total / marks.length;
}
let avg = calculateAverage([90, 69, 70, 85, 55]);
console.log("Average Marks:", avg);
function countPassedStudent(marks) {
    let count = 0;
    for (let mark of marks) {
        if (mark >= 50) {
            count++;
        }
    }
    return count;
}
console.log("Passed Students:", countPassedStudent([50, 60, 30, 43, 69, 99, 65, 22]));
