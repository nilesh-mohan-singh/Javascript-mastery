let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); //apple - first element
console.log(fruits[2]); //mango - last element
console.log(fruits.length); //3
console.log(fruits[fruits.length - 1]); //last element


let colors = ["red", "blue", "green"];
colors = ["red", "yellow", "green"];
colors[2] = "yellow";
console.log(colors);


let arr = [1, 2, 3];
arr[0] = 100;
console.log(arr); // [100, 2, 3]
// Arrays are mutable and they copy by reference not copy by value



// Array Methods
let numbers = [1, 2, 3];
console.log(numbers.push(4));


numbers = [10, 20, 30];
console.log(numbers.pop(2));
console.log(numbers);



// Add Nilesh at beginning
let users = ["Rahul", "Aman"];
users = users.shift();
// users = users.unshift("Nilesh");
console.log(users);








// // Part 3 - Looping through Arrays
let cities = ["Delhi", "Mumbai", "Pune"];
for (let city of cities){
    console.log(city);
};



// Sum of array
let allnumbers = [10, 20, 30, 40];
for (let number of allnumbers ) {
    console.log(number);
}


// Find largest numberl
let listOfnumbers = [4, 9, 2, 15, 6]


// Print Even Numbers
let numberslist = [1,2,3,4,5,6];


// Reverse Array
let listNumbers = [1,2,3,4]






let arr = [1,2,3];
console.log(arr.length()); //arr.length is property not method, it is executed with parenthesis




let arr = [1,2,3];
console.log(arr + 1); //1,2,3 + 1
console.log([1,2] + [3,4]); //[1, 2, 3, 4]