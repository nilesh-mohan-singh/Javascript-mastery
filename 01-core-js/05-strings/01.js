// Create String - "", ''
// String Length - string.length()
// String Index and Indices - str[0], str[1], str[2]
// Template Literals - ``
// String Interpolation - ${}
// Escape Characters - \n, \t

// String Methods - Built in string methods
// str.toUpperCase(), str.toLowerCase(), 
// str.trim() //removes whitespace
// str.slice(start, end?) // returns part of string
// str1.concat(str2) // joins str2 with str1
// str.replace(searchVal, newVal)
// str.charAt(idx)


/*
1. Basics - str.length, str[index], str.at(index)
2. Extracting Parts of Strings - str.slice(start, end), str.substring(start, end)
3. Searching in Strings - str.includes(value), str.indexOf(value), str.startsWith(value), str.endsWith(value)
4. Replace and Modify - str.replace(search, replace), str.replaceAll(search, replace)
5. Case Conversion - str.toLowerCase(), str.toUpperCase(), userInput.toLowerCase() === "yes"
6. Remove spaces - str.trim(), str.trimStart(), str.trimEnd(), " hello ".trim() // "hello"
7. Split & Join - str.split(separator), arr.join(separator), "apple,banana".split(",")
8. Combine Strings - str.concat(), template literals(`${})
9. Repeat - str.repeat(n), "*".repeat(5) // *****
10. Advanced but Common - str.match(regex), str.matchAll(regex), str.search(regex)
*/

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc') // using "new" keyword by js object


// console.log(gameName[0])
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //don't change the original string
// console.log(gameName.charAt([2]));
// console.log(gameName.indexOf('t'));


// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringONe = "  hitesh   "
// console.log(newStringONe);
// console.log(newStringONe.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'))
