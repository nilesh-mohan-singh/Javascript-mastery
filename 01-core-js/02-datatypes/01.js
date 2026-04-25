// Data Types

/**
Primitive
String, Number, Boolean, Undefined, Null, BigInt, Symbol

Reference
Array, Object, Function
 */

const firstName = "Nilesh";
const middleName = "Mohan";
const lastName = "Singh";
let fullName = `Hi! ${firstName + " " + middleName + " " + lastName + "!"}`;
let isLarge = true
let score = 80

let big = 12345678901234567890n;
let x;
let data = null;
let id = Symbol("id");

// // console.log(fullName, isLarge, score);
// console.log(big, x, data, id);

const student = {
    fullName : "Nilesh Mohan Singh",
    isLarge : true,
    score : 80
};
// console.log(student)
// console.log(student.fullName, "\n", student.isLarge, "\t", student.score);
// console.log(student["fullName"], student["score"]);


const listOfStudents = ["Nilesh", "Mohan", "Singh"]
// console.log(listOfStudents[2], listOfStudents[3], listOfStudents[0]);
// console.log(listOfStudents[2], listOfStudents[1], listOfStudents[0]);
// console.log(listOfStudents.length);
// console.log(listOfStudents[2], listOfStudents[0], listOfStudents[1]);



// "use strict";  // treat all JS code as newer version
// alert(3 + 3)  // we are using nodejs, not browser
// Most important thing is code readability


// number => 2 to power 53
// bigInt 
// null => standalone value

// Let, const, var
// Datatypes and ECMA standards
// Datatype conversion confusion
// Why string to numbers
// Comparison of datatypes
// Datatypes summary

// Datatype conversion - implicit conversion (automatic) & Explicit Conversion (manual) 
// type coercion 
// Deep copy and shallow copy
// Truthy and Falsy Values


// type coercion 
"5" + 2   // "52"  (number → string)
"5" - 2   // 3     (string → number)
true + 1  // 2     (boolean → number)
// 👉 This inconsistency is where confusion starts.

// console.log(typeof ("5" + 2))
// console.log(typeof ("5" - 2))
// console.log(typeof(true + 1))


// Explicit Conversion (manual)
Number("5")   // 5
String(5)     // "5"
Boolean(0)    // false

// console.log(Number("5"))
// console.log(typeof (Number("5")))

// console.log(String(5))
// console.log(typeof (String(5) ))

// console.log(Boolean(0))
// console.log(typeof(Boolean(0)))
 

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log((3 + 4) * 5 % 3);


// console.log(true);
// console.log(+true);
// // console.log(true+); // error
// console.log(+"");



let num1, num2, num3

num1 = num2 = num3 = 2 + 2


// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);



