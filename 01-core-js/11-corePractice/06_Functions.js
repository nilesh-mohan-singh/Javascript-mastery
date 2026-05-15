function greet(){
    console.log("hello Nilesh")
}
greet();



function greet(welcomeUser){
    console.log("Welcome", welcomeUser)
}
greet("Mohan");



function addNumbers(a, b){
    return a + b;
}
console.log(addNumbers(2, 3));
// addNumbers(2, 3);




function test() {
  console.log("Hello");
}
let result = test();
console.log(result); //test() stored inside result, and it will print undefined.




function checkEvenOdd(num){
    if (num%2 === 0) {
        console.log(num, "is Even");
    } else {
        console.log(num, "is odd");
    };
};
checkEvenOdd(4);
checkEvenOdd(5);



function findLargest(a, b){
    if (a > b) {
        console.log(a, "is greater than", b);
    } else {
        console.log(b, "is greater than", a);
    };
};




function reverseString(name){
    name = `${name}`;
    reverseString = "";
}










let username = "Global";
function showName() {
  let username = "Local";
  console.log(username);
}
showName(); //local as because of block scope
console.log(username); //global as because of global scope




let city = "Patna";
function printCity() {
  console.log(city);
}
printCity(); 
//Patna because children can access parent
// function scope can access global scope
// but global scope can't access function scope variable





function countVowels(name){
    let name = "javascript"
}



function isPalindrome(){

}





function add(a, b) {
  console.log(a + b);
}
let finalresult = add(2, 3);
console.log(finalresult + 10);







function test() {
  return;
}
console.log(test());
