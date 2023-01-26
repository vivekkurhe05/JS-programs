/**
 * Write a Python program to remove multiple spaces in a string.
 */

let text1 = "Python      Exercises";
let re = /\s+/;
text1 = text1.replace(re, " ");
console.log(text1);
