/**
 *  Write a Python program to replace maximum 2 occurrences of space, comma, or dot with a colon.
 */

// Note
let text = "Python Exercises, PHP exercises.";

let re = /(\s|,|\.){1,2}/g;
text = text.replace(re, ":");
console.log(text);
