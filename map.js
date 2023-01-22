let numbers = [3, 56, 2, 48, 5];

//Map-Created a new array by doing something with each item in an array.
//If you have an array use map function!

function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

//short way map!

// const newNumbers = numbers.map(function double(x) {
// return x * 2;
// });

// console.log(newNumbers);
