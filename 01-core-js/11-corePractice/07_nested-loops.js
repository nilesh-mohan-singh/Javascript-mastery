// // Print 1 to 10
// // Reverse - 10 to 1
// // Sum from 1 to 100 - 1 + 2 + 3 + ... + 100



// // Nested loop thinking
// // Star Pattern 
// // *
// // **
// // ***
// // ****
// // *****


// // Reverse Star Pattern 
// // *****
// // ****
// // ***
// // **
// // *




// // Part 3 - Array + Loop Logic
// // Count Even Numbers - [1,2,3,4,5,6,8]
// // Find Smallest Number - [5,2,9,1,7]
// // Count Character Frequency (VERY IMPORTANT)





// // Part 4 - Function + Logic
// // Factorial Function - factorial - 5 * 4 * 3 * 2 * 1
// // Prime Number Check - isPrime
// // Find duplicate values - [1,2,3,2,4,1] - [1, 2]






// // Part 5 - Execution Context Thinking
// // Predict Carefully
// let a = 10;
// function test() {
//   let a = 20;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// test();// 20 because of closures and lexical environment




// // Predict Carefully
// let value = 100;
// function one() {
//   let value = 50;
//   function two() {
//     let value = 25;
//     console.log(value);
//   }
//   two();
// }
// one(); //25
// console.log(value); //100








// function multiply(a, b) {
//   a * b;
// }
// console.log(multiply(2, 3));






// console.log(typeof NaN);
// console.log(NaN === NaN);









for (let row = 1; row <= 4; row ++ ){
  let print = "";
  for (let item = 1; item <= 1; item ++){ // It printed only 1 because item <= 1
    // console.log(print += item);
  }
}


for (let row = 1; row <= 4; row ++ ){
  let print = "";
  for (let item = 1; item <= row; item ++){ // It printed only 1 because item <= 1
    // console.log(print = item + item);
  }
}

// console.log("1")
// console.log("2" + 2)
// console.log("3" + 3 + 3)
// console.log("4" + 4 + 4 + 4)



for (let row = 1; row <= 3; row ++) {
  
  let count = row;
  // console.log(count);
  // console.log(typeof count);

  let str = "";
  // "0" + 1 = "1"
  // "0" + 2 = "2" -> "2" + 2 = "22" 
  // console.log(str); 

  for (let item = 1; item <= count; item ++) {
    
  }

}

// let string = "";
for (let str = 1; str >= 2; str++){
  if (str <= 3) {
    console.log("3");
  }
  // string = string + str;
}
// console.log(string);






let string = "";
for (let a = 1; a <= 3; a++){
  // console.log(a)
}
// for (let a = 1; a <= 3; a++){
//   let count = a;
//   console.log(count);

//   string = string + a;  
//   console.log(string);
// }
for (let a = 1; a <= 3; a++){
  let count = a;
  // console.log(count);

  for (let str = 1; str <= a; str++){
    // console.log(count);
    // string = string + count;
    // string = count;
    string += count;
    // console.log(string);
  }
  

  // string = string + a;  
  // console.log(string);
}




// for (let a = 1; a <= 3; a++) {
//   let count = a;
//   let pattern = ""
//   for (let str = 1; str <= a; str++){
//     // console.log(count);
//     pattern = count;
//     console.log(pattern);
//   }

// }


// let count = 3;
// while (count >= 3) {
//   console.log(count);
// } count++;




// let pattern = ""
// let num = 3;
// for (let str = 1; str <= 3; str ++){
//   pattern = pattern + num;
//   console.log(pattern);
// }



// let num = 1;
// for (let a = 1; a <= num; a++) {
//   console.log("3")
// }


for (let row = 1; row <= 3; row ++) {
  
  let num = row;

  let str = "";
  for (let a = 1; a <= num; a++) {
    
    str = num + str;
    // console.log(str);
    // console.log(num);
  }
  console.log(str);

}


// num = 1
// num = 2 + 2
// num = 3 + 3 + 3 
// num = 4 + 4 + 4 + 4

// num = 1
// num = 1 + 2
// num = 1 + 2 + 3
// num = 1 + 2 + 3 + 4
// num = 1 + 2 + 3 + 4 + 5

// str = "0"
// str = "0" + 1;
// str = "0" + 2 + 2;
// str = "0" + 3 + 3 + 3;



