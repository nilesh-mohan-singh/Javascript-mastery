let str = "JavaScript";
console.log(str[0]);    //first character
console.log(str[9]);    //last character
console.log(str.length);    //string length



let text = "Hello";
console.log(text[0]); // H
console.log(text[4]); // o
console.log(text[5]); // undefined - as nothing on position 6 or index 6




let word = "hello";
word[0] = "H";
console.log(word); // hello - as value does not change in the original




let language = "JavaScript";
console.log(language.toUpperCase()); // uppercase version
console.log(language.toLowerCase()); // lowercase version


// It will not print the uppercase and lowercase version as you haven't used brackets with methods
// console.log(language.toUpperCase); // uppercase version
// console.log(language.toLowerCase); // lowercase version






let msg = "   hello world   ";
console.log(msg.trim()); // hello world - without extra space



let sentence = "JavaScript is awesome";
console.log(sentence.includes("Script")); // True
console.log(sentence.includes("Python")); // False



let jstext = "JavaScript";
console.log(jstext.slice());
console.log(jstext.substring());
// Solution
console.log(jstext.slice(0, 4));
console.log(jstext.slice(4));




let Javatext = "I like Java";
console.log(Javatext.replace("Java", "JavaScript"));






let data = "apple,banana,mango";
console.log(data.split(",")); //return array list of strings




// let strname = "hello";
// for (let index = 4; index >= 0; index--) {
//     // console.log(index);

//     // let name = index;
//     // console.log(name);
    
//     // let name = index;
//     // name = name + index;
//     // console.log(name);
    
//     // let name = index;
//     // name = name - index;
//     // console.log(name);

//     let sum = 0
//     sum = sum + index;
//     console.log(sum);
// };

// English Steps FIRST
// Create empty string
// Loop backward
// Add characters one by one

// This is the right solution
let strname = "hello";
let reversedstring = "";

for (let i = strname.length - 1; i >= 0; i--) {
  reversedstring += strname[i];
}
console.log(reversedstring);





let countVowels = "javascript"; // Loop through string, Check vowel through conditions, and then finally increase counter
let count = 0;

for (let i = 0; i < text.length; i++) {
  let char = text[i];

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    count++;
  }
}

console.log(count);






// Palindrome check - racecar
// loop to reverse string and stricter version to check the type of text
let word = "solos";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

console.log(word === reversed);







let name = "Nilesh";
console.log(name.length()); 
// length is a property not method so not with parenthesis 
// name.length is the right.





console.log("5" + 5 + 1); // 56 or 551 - first add or all concatenate
// will be 551 - "5" + 5 = "55" + 1 = "551"
console.log(5 + 5 + "1"); // 11 or 111 - first add or all concatenate
// will be 101 - 5 + 5 = 10 + "1" = "101"
