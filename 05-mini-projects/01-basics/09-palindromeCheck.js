// 5 Letter palindrome examples
// radar, solos, level, refer, civic, rotor, tenet, kayak, minim, sagas

let input = "radar";
let palindrome = "";

for (let i = input.length - 1; i >= 0; i--){
    // console.log(input[i]);
    palindrome += input[i]
    // console.log(palindrome);
}
console.log(palindrome);

if (palindrome === input) {
    console.log(input, "is palindrome")
} else {
    console.log(input, "is not palindrome")
}


