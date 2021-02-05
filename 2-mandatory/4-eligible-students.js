/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of those who have attended AT LEAST 8 classes
*/

function isEligible(array) {
  return array[1] >= 8;
}

// I had some help with this function below

// array: [ ["Ahmed", 8], ["Clement", 10], ["Elamin", 6], ["Adam", 7], ["Tayoa", 11], ["Nina", 10],];
function eligibleStudents(array) {
  let newArray = [];
  let filteredArray = array.filter(isEligible); // array: [ ["Ahmed", 8], ["Clement", 10], ["Tayoa", 11], ["Nina", 10],]
  for (let i = 0; i < filteredArray.length; i++) {
    let studentPair = filteredArray[i]; // studentPair: ["Ahmed", 8]
    newArray.push(studentPair[0]); // studentPair[0]: ["Ahmed"]
  }
  return newArray; // newArray: [ "Ahmed" ]
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10],
];

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("eligibleStudents function works", eligibleStudents(attendances), [
  "Ahmed",
  "Clement",
  "Tayoa",
  "Nina",
]);
