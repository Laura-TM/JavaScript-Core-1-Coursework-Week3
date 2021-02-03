/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsByIndexRaw` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

// Statement completed
// Little by little I learnt to convert the statement into a one-liner
var pairsByIndex = pairsByIndexRaw.filter(array => Array.isArray(array) && array.length == 2);

// I prefer to show the code separately, like so:

// function isItPaired (array) {
//   return Array.isArray(array) && array.length == 2;
// }

// var pairsByIndex = pairsByIndexRaw.filter(isItPaired);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

var pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
