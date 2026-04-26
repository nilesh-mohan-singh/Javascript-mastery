// Recursion
function hello(){
    hello();
}
// hello();





// Conditionals
// If Statement
// If Else Statement
// If Else If Else Statement

// If Statement
let num = 1;
if (num === 2){
    // console.log("Hi, Nilesh!");
}

if (num === 2){
    // console.log(num, " is true")
} else {
    // console.log(num, " is wrong")
}



if (num === 2){
    // console.log(num, " is true")
} else if(num <= 1) {
    // console.log(num, " is too low")
} else {
    // console.log(num, " is wrong")
}




// Loops
// for Loop 
// while loop
// do while loop
// for of loop 
// for in loop


// for Loop 
for (let num = 2; num < 200; num *= 3) {
    console.log(num);
};


// while loop
let n = 2;
while (n < 10) {
    console.log(`Value of n is ${n}`);
    n = n + 2;
}


// do while loop
let score = 11;

do {
    console.log(`Score is ${score}`);
    score ++;
} while (score < 10);


