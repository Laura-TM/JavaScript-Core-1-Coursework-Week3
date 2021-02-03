// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// Option 1: function separate to the call-back function
function multiplyBy100(number) {
  return number * 100;
}
const multipliedNumbers = numbers.map(multiplyBy100);

// Option 2: function inside the .map() method
const multipliedNumbers = numbers.map(function multiplyBy100(number) {
  return number * 100;
});

// Option 3: similar to the above option but function's name deleted
const multipliedNumbers = numbers.map(function (number) {
  return number * 100;
});

// Option 4: converting it into an arrow function
const multipliedNumbers = numbers.map((number) => {
  return number * 100;
});

// Option 5: reducing it to the shortest syntax possible
const multipliedNumbers = numbers.map((number) => number * 100);
