console.log(a);
var a = 10;

console.log(a);
let a = 10;


// Understand:
// creation phase
// memory allocation
// TDZ




foo();
function foo() {
  console.log("hello");
}

// vs 

foo();
var foo = function () {
  console.log("hello");
};




// Scope Chain
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();



// Lexical Environment deep dive 
function x() {
  var a = 7;

  function y() {
    console.log(a);
  }

  return y;
}

const z = x();
z();



// var in loops 
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}



console.log(a);
let a = 10;




// Phase 2 - this Keyword Mastery
console.log(this);

function x() {
  console.log(this);
}

x();


//Object method
// const obj = {
//   name: "Aman",
//   greet() {
//     console.log(this.name);
//   },
// };

// obj.greet();

// const fn = obj.greet;
// fn();


// Arrow Function vs Normal Function
const obj = {
  name: "Aman",

  normal: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

obj.normal();
obj.arrow();



// 10. bind, call, apply

// Implement your own:

// myBind
// myCall
// myApply

// This single exercise teaches this deeply.




// Phase 3 - Closures
// 11. Counter using closures
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();



// Memoization
memoize(fn)


// Once function
const initialize = once(() => {
  console.log("Initialized");
});


// 14. Currying
// Convert sum(1, 2, 3) to sum(1)(2)(3)



// 15. Debounce (Without DOM)
// Implement pure JS debounce logic. Then explain: closure, timer memory, async timing



// 16. Throttle 
// Implement from scratch.
// Understand difference from debounce deeply.




// Phase 4 - Async JavaScript + Event Loop
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");




console.log("start");

Promise.resolve().then(() => {
  console.log("promise");
});

setTimeout(() => {
  console.log("timeout");
}, 0);

console.log("end");




console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });

console.log("E");





// Build your own promise - class MyPromise {}

// Promise Chaining
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)


// 22. Promise.all Polyfill
// Implement: Promise.all, Promise.race, Promise.allSettled


// Async/Await Internals
async function test() {
  const data = await fetchData();
  console.log(data);
}



// Sequential vs Parallel Async
await a();
await b();
await c();
// vs
await Promise.all([a(), b(), c()]);




// Phase 5 — Functions + Functional Thinking
// 25. Polyfills
// Implement: map, filter, reduce


// 26. Compose and Pipe
compose(fn1, fn2, fn3)
pipe(fn1, fn2, fn3)


// 27. Flatten Array
flatten([1, [2, [3, [4]]]])



// 28. Deep Clone
// Implement deep clone manually.
// Understand: references, memory, recursion, circular refs


// Phase 6 - Weird JS Questions (Critical)
// [] + []
// [] + {}
// {} + []
// true + true
// "5" - 1
// "5" + 1
// null == undefined
// null === undefined



// const a = { x: 1 };
// const b = a;
// b.x = 10;
// console.log(a.x);



console.log([] == []);
console.log({} == {});

