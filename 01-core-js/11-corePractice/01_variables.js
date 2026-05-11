// Declare a variable name and store your name
// Declare age and store your age
// print: My name is X and I am Y years old

let myName = "Nilesh Mohan Singh";
let myAge = 24;
console.log("My name is", myName, "and I am", myAge, "years old." );



// Swapping the value
let a = 10;
// a = 20; // it is reassigning

let b = 20;
// b = 10; // it is reassigning

[a, b] = [b, a]; // it is actually swapping value

console.log(a, b)





console.log(typeof "hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof null); //object
// null is not an object but JS returns "object"
console.log(typeof undefined); //undefined







let x;
console.log(x); // undefined

let y = null;
console.log(typeof y); // null - no it will print object not null







let abc = "5";
let bcd = 2;

console.log(abc + bcd); // + causes string concatenation
console.log(abc - bcd); // - converts string to numbers automatically  - This is called Type Coercion







// Create 3 variables: firstName lastName isStudent
// Print: John Doe is a student: true

const firstName = "Nilesh Mohan";
const lastName = "Singh";
const isStudent = true;
console.log(firstName, lastName, "is a student:", isStudent);
console.log(`${firstName} ${lastName} is a student: ${isStudent}`);



// What's wrong here?
// const age = 20; 
// age = 25; //can't reassign because of const keyword
// console.log(age);





// Difference between undefined and null - define in your own words
// undefined = no value assigned in variable
// null = value assigned null


// undefined = js automatically gives this value when variable declared but not assigned.
// null is intentionally assigned by developer means there is no value.




