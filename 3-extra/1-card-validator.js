/*
These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. 
- The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.           
- Return a boolean from the function to indicate whether the credit card number is valid.        MISSING
- Use `node` from the command line to test if your code works as expected.                       MISSING

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.
*/

// 1. checks the number has 16 digits
function checkLength(number) {
  return number.length == 16;
}

// 2. checks the number only contains digits
function areTheyDigits(number) {
  return !isNaN(number);
}

// 3. checks if all numbers are the same or not
// I had some help with this function
function isAllSame(string) {
  let previousCharacter = string[0];
  for (let i = 1; i < string.length; i++) {
    let currentCharacter = string[i];
    if (currentCharacter != previousCharacter) {
      return false;
    }
  }
  return true;
}

// 4. checks the final digit is even
function isItEven(number) {
  let lastDigit = number[number.length - 1];
  return lastDigit % 2 == 0;
}

// 5. sums all the characters in a string
// I found this function on freecodecamp.com
const sumDigits = (string) => [...string].reduce((sum, char) => sum + +char, 0);

// We now check the card number against all requirements using the previous functions
function validateCard(number) {
  return (
    checkLength(number) &&
    areTheyDigits(number) &&
    !isAllSame(number) &&
    isItEven(number) &&
    sumDigits(number) > 16
  );
}

console.log(validateCard("1234567890123456")); // true
console.log(validateCard("1011111111111111")); // false
console.log(validateCard("1111111111111111")); // false
console.log(validateCard("0111111111111113")); // false
console.log(validateCard("0111111111111114")); // true
console.log(validateCard("0111111111111112")); // false
console.log(validateCard("0111111111111111")); // false
console.log(validateCard("A234567890123450")); // false
console.log(validateCard("123456789")); // false
console.log(validateCard("9999999999999997")); // false
console.log(validateCard("9999999999900004")); // true
