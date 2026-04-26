// Declaration
// Expression
// Anonymous
// Parameters vs Arguments
// Arrow Functions
// Default & Rest Parameters
// Function Scope, Block Scope, Lexical Scope
// Hoisting in Functions
// Callback Functions
// Higher Order Function
// Closures
// IIFE
// Recursion
// Function Currying
// Parital Application
// Function Composition


/*
Implicit & Explicit Return

Arrow Function
Callback Function
Higher Order Function
Immediately Invoked Function
Asynchronous Function
Constructor Function
Factory Function

*/

// Function Definition
function functionName () {
    // do some work
}

// Function Call
functionName()


// Function with Parameters
function functionName(param1, param2){
    // do some work
}

// Function Call with Argument
functionName(1, 2)


// Example of Function with parameters & arguments
function myFunction(msg){
    console.log(msg)
}
myFunction("I love js")


// Return Keyword
function sum(x, y) {
    s = x + y
    return s;
}
let val = sum (3, 4)
console.log(val)


// Arrow Functions as function expressions
const functionName = (param1, param2) => {
    // do some work
} 

const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(2, 3)



// Callback Function
// Definition - A function passed into another function as an argument to be executed later.
// Role - Acts as a delegate or task-specific instruction executed by the HOF.
// Execution - It is invoked inside the higher-order function at a specific time.
// Purpose- Used for handling events, asynchronous results (like data fetching), or iterative tasks.


// Higher-Order Function (HOF) 
// Definition - A function that takes another function as an argument or returns a function.
// Role - Acts as the manager or controller that orchestrates logic.
// Execution - It is the function being invoked first.
// Purpose- Used to create abstractions, modular code, or function factories.


// Callback Function vs Higher Order Functions
// The terms callback function and higher-order function describe the roles functions play when interacting with one another. A higher-order function is the "outer" function that manages or returns other functions, while a callback is the "inner" function passed as an input



function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Alice"); // called right here, immediately
}

processUser(greet);




// Higher Order Function or Methods
arrowSum.forEach((val) => {
    console.log(val);
})


// Higher Order Function vs Higher Order Method
// A higher-order function is any function that accepts other functions as arguments or returns a function. A higher-order method is specifically a higher-order function that belongs to an object or class, acting on its data (e.g., Array.prototype.map in JS). The core difference is scope: "method" implies an object-oriented context, while "function" is broader.
