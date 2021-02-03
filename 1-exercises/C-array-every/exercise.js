/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

// Statement completed
// Little by little I learnt to convert the statement into a one-liner
// When auto-save does its job, parenthesis appear around name before arrow function symbol
var groupIsOnlyStudents = group.every((name) => students.includes(name));

// I prefer to show the code separately, like so:

// function isItAStudent(name) {
//   return students.includes(name);
// }
// var groupIsOnlyStudents = group.every(isItAStudent);

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
