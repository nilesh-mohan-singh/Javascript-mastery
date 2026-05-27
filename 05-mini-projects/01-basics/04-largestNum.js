let threeNumbers = [56, 24, 234];

let largest = 0;
threeNumbers.forEach((num) => {
    // let largest = 0;
    if (num > largest) {
        largest = num;
    } 
    // else {
    //     largest = largest;
    // }
});
console.log(largest);

// 24
// 56
// 234