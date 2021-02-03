/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitalise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

// I found all these three options online

// Option 1 with .slice()

function capitalise(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Option 2 with .split() and .join()

function capitaliseFirstLetter(string) {
  var pieces = string.split("");
  pieces[0] = pieces[0].toUpperCase();
  return pieces.join("");
}

// Option 3 with .substring()

function capitaliseLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";
var otherName = "irene";
var extraName = "deborah";

console.log(capitalise(name));
console.log(capitalise("hello"));

console.log(capitaliseFirstLetter(otherName));
console.log(capitaliseFirstLetter("goodbye"));

console.log(capitaliseLetter(extraName));
console.log(capitaliseLetter("what's up!"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
  Irene
  Goodbye
  Deborah
  What's up
*/
