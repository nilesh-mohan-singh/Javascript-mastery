// Basics
// Access
// Dynamic Keys
// Modification
// Iteration
// this
// Nested Objects
// Arrays of Objects
// Destructuring & Nested Destructuring
// Spread & Rest Operator in Objects
// Shallow & Deep Copy
// Reference vs Value
// Optinal Chaining & Nullish Coalescing
// Object Methodds
// Object.freeze/seal
// Property Checks


/*
Object literals
Factory Functions
Constructor Functions
Classes
Object.create()
new Object() //least Important
*/


// Object Creation
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
}

// Object Access
console.log(car.brand);
console.log(car["model"]);

// Add/Update
car.color = "black"
car.year = 2023



// Factory function - function which returns an object
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log("Hello" + name);
        }
    }
}

const user1 = createUser("Alice", 22)
user1.greet();



// Object.create() - Used to create an object a specific prototype
const animal = {
    speak() {
        console.log("Animal speaks");
    }
};

const dog = Object.create(animal)
dog.bark = function () {
    console.log("Woof!");
};

dog.speak();
dog.bark();



// Constructor Functions
function Person (name, age) {
    this.name = name,
    this.age = age;
};

// By convention Function name starts with capital letters & used with new Keyword
const p1 = new Person ("Mike", 28); 







