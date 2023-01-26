/**
 * Write a Python program to split a string at uppercase letters.
 */

// my solution
let text = "PythonTutorialAndExercises";
let re = /[A-Z][a-z]+/g;
let arr = text.match(re);
console.log(arr);
