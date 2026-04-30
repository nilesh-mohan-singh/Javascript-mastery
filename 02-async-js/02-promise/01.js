
// Promises
// Promise Syntax
// let promise = new Promise ((resolve, reject) => {})
// resolve & reject are callbacks provided by JS automatically.

// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
// });

// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });



// let promise = new Promise ((resolve, reject) => {
//     console.log("I am a promise");
//     reject ("same error occurred");
// });

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) => {

//     })
// }

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve ("success");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// };



// In the console - explore around these
// let result = getData(123)
// result



// Handling Promises
// promise.then((res) => {...})
// promise.catch((err) => {...})
// "Res" & "err" are the parameters which comes automaticallyy in "Promise.then" & "Promise.catch"

//Example
const getPromise = () => {
    return new Promise ((resolve, reject) => {
        console.log("I am a promise");
        resolve ("success");
    });
};



let promise = getPromise();
promise.then(() => {
    console.log("promise fulfilled");
})

promise.catch(() => {
    console.log("rejected");
})

promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});




// Promise Chain
function asyncFunc() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve ("success");
        }, 4000);
    });
};

// console.log("fetching data 1...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });




// With 2 asyncFunc
function asyncFunc1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve ("success");
        }, 4000);
    });
};
function asyncFunc2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve ("success");
        }, 4000);
    });
};

// console.log("fetching data 1...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data 2...");
// let p2 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });




function asyncFunc1(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve ("success");
        }, 4000);
    });
};

function asyncFunc2() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve ("success");
        }, 4000);
    });
};

console.log("fetching data 1...");
let p1 = asyncFunc1 ()
p1.then((res) => {
    console.log("fetching data 2...");
    let p2 = asyncFunc2 ()
    p2.then((res) => {});
});


// shortening the same code
console.log("fetching dat 1...");
asyncFunc1().then((res) => {
    console.log("fetching data 2...");
    asyncFunc2().then((res) => {});
});


