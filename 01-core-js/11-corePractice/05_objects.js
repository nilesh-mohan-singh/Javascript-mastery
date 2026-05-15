let student = {
  name: "Nilesh",
  age: 24,
  isStudent: true
};
console.log(student.name, student.age, student.isStudent);
console.log(student[0], student[1], student[2]);


// age → 25
// city: "Patna"
student = {
    age : 25, 
    city: "Patna"
}
// student.age = 25;
// student.city = "Patna";
console.log(student);



let user = {
  name: "Aman"
};
user.name = "Rahul";
console.log(user); // print {name: "Rahul"}, as objects are mutable






// // Nested Objects
let person = {
  name: "Nilesh",
  address: {
    city: "Patna",
    pincode: 800001
  }
};
console.log(person.address.city, person.address.pincode);
console.log(person.address.city, person.address.pincode);
// console.log(address[1], address[2]);


let obj = {
  a: 10,
  b: {
    c: 20
  }
};
console.log(obj.b.c); // 20
// inside object then inside b then the c value





// Array of Objects
let users = [
  { name: "Nilesh", age: 24 },
  { name: "Rahul", age: 22 },
  { name: "Aman", age: 26 }
];
console.log(users.name, users.age);
console.log(users[0].name, users[0].age);
console.log(users[1].name, users[1].age);
console.log(users[2].name, users[2].age);

for (let user of users) {
    console.log(user.name, user.age);
};


for (let user of users) {
    // if (age === 26){ // age is not defined
    //     console.log(user);
    // };
    
    if (user.age === 26){
        console.log(user);
    };
};




let marks = {
  math: 90,
  science: 85,
  english: 88
};
// let totalmarks = 0;
// for (let mark in  marks) {
//     console.log(mark);
//     totalmarks += mark;
// }
// console.log(totalmarks);






let car = {
  brand: "Toyota",
  model: "Camry"
};
console.log(car.model);
console.log(car.price);
// if (car.includes === car.model){
//     console.log(car.model);
// };
if (car.model === car.model){
    console.log(car.model);
}
if (car.price === car.price){
    console.log(car.price);
}
if (car.price === car.price){
    if (car.price === undefined){
        console.log("price of car is not defined")
    }
}
// I don't know how to use "in" operator
// for (let car in cars){
//     if (car.model === car.model){
//         console.log(car.model, "is the car model");
//     } else if(car.price === car.price) {
//         console.log(car.price, "is the car price")
//     }
// }



// key → value
// math → 90
// science → 85



// let user = {
//   name: "Nilesh"
// };
// console.log(user.age.toUpperCase()); // age is not defined and that's why method will not be applied




console.log({} + []);
console.log([] + {});
