function outer() {
    let count = 0;

    function inner() {
        count++
        console.log(count)
    }
    return inner;
};

const fn = outer();

// fn();
// fn();
// fn();



// const fn1 = outer();
// const fn2 = outer();

// fn1();
// fn1();

// fn2();