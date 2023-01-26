/**
 * Write a Python program to remove all whitespaces from a string.
 */

text1 = " Python    Exercises ";
let re = /\s+/g;
text1 = text1.replace(re, "");
console.log(text1);
