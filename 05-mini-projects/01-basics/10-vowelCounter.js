let stuName = "Ridhi";
let vowelCount = 0;
for (let i = stuName.length - 1; i >= 0; i--){
    if (stuName[i] === "a"){vowelCount++}
    if (stuName[i] === "e"){vowelCount++}
    if (stuName[i] === "i"){vowelCount++}
    if (stuName[i] === "o"){vowelCount++}
    if (stuName[i] === "u"){vowelCount++}
}
console.log(`total count of vowel in ${stuName} is ${vowelCount}`)
