/**
 * Write a Python program to split a string at uppercase letters.
 */

let text = "PythonTutorialAndExercises";
let re = /[A-Z][^A-Z]*/g;
let split_words = text.match(re);
console.log(split_words);
