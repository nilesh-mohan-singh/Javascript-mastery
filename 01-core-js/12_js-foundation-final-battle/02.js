console.log(a);
var a = 10;


console.log(a);
let a = 10;


foo();

function foo() {
  console.log("Hello");
}


foo();

var foo = function () {
  console.log("Hello");
};



var x = 1;

function a() {
  console.log(x);
  var x = 10;
}

a();


// Section 2
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();

fn();
fn();
fn();



for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}




function x() {
  var a = 7;

  return function y() {
    console.log(a);
  };
}

const z = x();
z();



function test() {
  let value = 100;

  return {
    increment() {
      value++;
    },
    getValue() {
      return value;
    },
  };
}

const t = test();

t.increment();
console.log(t.getValue());



console.log(this);



// const obj = {
//   name: "JS",
//   greet() {
//     console.log(this.name);
//   },
// };

// obj.greet();




// const obj = {
//   name: "JS",
//   greet() {
//     console.log(this.name);
//   },
// };

// const fn = obj.greet;
// fn();



const obj = {
  name: "JS",

  arrow: () => {
    console.log(this.name);
  },

  normal() {
    console.log(this.name);
  },
};

obj.arrow();
obj.normal();




// Q14

// Implement:

// myCall
// myApply
// myBind

// WITHOUT tutorials.




// Section 4 - Prototype + Inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const p1 = new Person("Aman");

p1.sayHi();





console.log([] instanceof Array);
console.log([] instanceof Object);



console.log(Object.getPrototypeOf([]));


// Section 5 - Async + Event Loop
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");






console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");





console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));

console.log("E");




setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => console.log(2));

queueMicrotask(() => console.log(3));

console.log(4);




async function test() {
  console.log(1);

  await Promise.resolve();

  console.log(2);
}

console.log(3);

test();

console.log(4);



// Q23 - Rewrite async/await using only promises.


// Section 6 - Promises

// Create mini promise implementation.
// Support: then, catch, resolve


// Q25 
// Implement: Promise.all, Promise.race, Promise.allSettled


Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => Promise.resolve(x + 1))
  .then(console.log);




// Section 7 - Functional JS
sum(1)(2)(3)

sum(1)(2)(3)(4)()


// Q30 - Implement debounce.

// Q31 - Implement throttle.

// Q32 - Implement memoization.






// SECTION 8 — Memory + References
const a = { value: 1 };
const b = a;

b.value = 99;

console.log(a.value);




console.log([] == []);
console.log({} == {});




// [] + []
// [] + {}
// {} + []
// "5" - 1
// "5" + 1
// null == undefined
// null === undefined

