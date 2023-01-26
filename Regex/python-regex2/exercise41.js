/**
 * Write a Python program to remove everything except alphanumeric characters from a string.
 */

// my solution
let text1 = "**//Python Exercises// - 12. ";
let re = /\W+/g;
text1 = text1.replace(re, "");
console.log(text1);
