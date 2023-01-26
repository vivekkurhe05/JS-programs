/**
 *  Write a Python program to replace maximum 2 occurrences of space, comma, or dot with a colon.
 */

let text = "Python Exercises, PHP exercises.";
let reg = /[\s,\.]{1,2}/g;
console.log(text.replace(reg, ":"));
