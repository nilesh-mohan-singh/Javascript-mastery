// Operators, Type Coercion, Truthy/Falsy Values

// Level 1
let num1 = 15;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

console.log(2 ** 4);



// Level 2
let x = 10;

x += 5;
x -= 3;
x *= 2;

console.log(x); // print 24





5 == "5" // true - checks value only and both have 5
5 === "5" // false - checks value and type and here one is string and one number




console.log(5 == "5"); //true
console.log(5 === "5"); //false

console.log(true == 1); //true
console.log(true === 1); //false

console.log(false == 0); //true
console.log(false === 0); //false








console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false
console.log(!false); //true



let age = 20;
console.log(age > 18 && age < 30); // true






// Truthy & Falsy Values
// 8 Primary Falsy Values in JS = false, 0, -0, 0n, "", null, undefined, NaN

console.log(Boolean("")); // false
console.log(Boolean("hello")); // true

console.log(Boolean(0)); //false
console.log(Boolean(100)); //true

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false



if ("hello") {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// It Prints Truthy because non-empty strings are truthy.



if (0) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
// It prints falsy because 0 is falsy.





let score = "100";
if (score === 100) { // Fix it by writing "100" so that it can detect type right too
  console.log("Excellent");
}

// Alternative Fix - This is more realistic in real-world apps.
if (Number(score) === 100)




console.log("5" + 1); // 51 - because of concatenation
console.log("5" - 1); // 4
console.log("5" * 2); // 10
console.log("5" / 5); // 1
