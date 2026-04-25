// Variables are containers for data
// Variable Declaration using Keywords
// let, const, var
// let and const has block scope where has var has the global scope
// using let and var, we can redeclare variables but not the same with const
// variable rules 
// 1) case sensitive & only letter, underscore and $ allowed as 1st character
// 2) reserved keywords can't be declared as variable
// Naming Convention - prefered camelCase

// Three Ways to Declare Variables
// var a = 10;
// let b = 20;
// const c = 30;

// Create a variable called "city" and assign the value "London"
let city = "London"

// Declare a constant named birthYear and set year of birth in it.
const birthYear = 2000;

// Change a variable score with the value 10, then change it to 15
let score = 10;
score = 15;


// Using Const
const x = 10;
// x = 20; ❌ error

const obj = { name: "A" };
obj.name = "B"; // ✅ allowed (object is mutable)




// *********PRACTICE***********
//👉 Task 1 - What will this print?
let a = 10;
console.log(a);
{
  let a = 20;
  console.log(a);
}
console.log(a);


// var a = 10;
// {
//   var a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 20



// Task 2 - 👉 Why does this work even though it's const?
const arr = [1, 2, 3];
arr.push(4);

console.log(arr);



