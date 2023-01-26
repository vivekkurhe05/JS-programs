/**
 * Write a Python program to replace all occurrences of space, comma, or dot with a colon.
 */

let text = "Python Exercises, PHP exercises.";
let reg = /[\s,\.]/g;
console.log(text.replace(reg, ":"));
