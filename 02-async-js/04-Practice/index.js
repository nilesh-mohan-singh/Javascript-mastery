const num = 5;

function sayHi() {
  console.log("Hi");
}





const greet = function() {
  console.log("Hello");
};

const x = 10;





function main(fn) {
  fn();
}

function sayHi() {
  console.log("Hi");
}

main(sayHi);



main(sayHi);

sayHi()

sayHi






function sayHi() {
  console.log("Hi");
}

function main(fn) {
  fn();
}

main(sayHi);








function process() {
  console.log("Doing work");
}

function process(callback) {
  console.log("Start");

  callback();

  console.log("End");
}



process(function() {
  console.log("Custom Task");
});







const arr = [1, 2, 3];

arr.forEach(function(num) {
  console.log(num);
});

console.log("Done");









function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(2, 3, add));






function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, multiply));






main(sayHi);

sayHi();

