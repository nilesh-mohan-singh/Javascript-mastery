// Normal function definition and calling
function one() {
    console.log("one");
}

function two() {
    console.log("two");
}

function three() {
    console.log("three");
}

one()
two()
three()



// function chaining
function one() {
    console.log("one");
    two()
}

function two() {
    console.log("two");
    three()
}

function three() {
    console.log("three");
}

one()
two()
three()



// Callback Function
function greet (callback) {
    console.log("Hello");
    callback();
}

function sayName() {
    console.log("John");
}

greet(sayName);



// Sum of 2 Numbers and mini calculator
function sum (a, b) {
    console.log( a + b );
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);



// Callback Function Understanding
function hello() {
    console.log("hello")
}

function run (x) {
    x();
}

hello();
run();
run(hello)



// Understanding Closures
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website)
    two()
}



// HOF/HOM - forEach loop on Array
const coding = ["js", "python", "bash", "php", "c", "java"]
coding.forEach(function(val){
    console.log(val);
});

coding.forEach((item) => {
    console.log(item);
});

function printMe(item){
    console.log(item);
};
coding.forEach(printMe);


coding.forEach(printMe);

coding.forEach((item) => {
    console.log(item);
});



// callback function
function hello() {
    console.log("Hello");
};

function run(x) {
    setTimeout(x, 0);
};

run(hello);

console.log("End");



// callback function and promise overview
function hello () { 
    console.log("Hello Callback")
}

function run (x) {
    setTimeout(x, 0);
}

console.log("1. Start");
run(hello)

Promise.resolve().then(() => {
    console.log("2. Promise");
});

console.log("3. End");






// callback function
function hello() {
    console.log("hello");
};
setTimeout(hello, 4000);

// same directly with arrow callback
setTimeout (() => {
    console.log("hello");
});


// Asynchronous Callback Function
console.log("one");
console.log("two");
setTimeout (() => {
    console.log("hello");
}, 4000);
console.log("three");
console.log("four");


// Sum of 2 Numbers and mini calculator
function sum (a, b) {
    console.log( a + b );
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, sum);



// Sum of 2 Numbers and mini calculator
function sum (a, b) {
    console.log( a + b );
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
    console.log(a + b);
});



const hello = () => {
    console.log("hello");
}

setTimeout(hello, 3000);



// Callback Hell
function getData(dataId) {
    console.log("dat", dataId);
}

getData();
getData(123);
getData(1);



function getData(dataId) {
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
};

getData(456)
getData(4)

getData(1);
getData(2);
getData(3);



function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        getNextData();
    }, 2000);
}
// getData(1, getData(2));  // this shows error
getData(1, () => {
    getData(2)
});



function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        };
    }, 2000);
};
getData(1, () => {
    getData(2);
});


getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});


getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4);
        });
    });
});


getData(1, () => {
    console.log("getting data 2...");
    getData(2, () => {
        console.log("getting data 3...");
        getData(3, () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});



