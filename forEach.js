//forEach has condition!

let numbers = [3, 56, 2, 48, 5];

let newNumbers = [];

numbers.forEach(function(x) {
  // Condition!
  newNumbers.push(x * 2);
});

console.log(newNumbers);

