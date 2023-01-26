/**
 * Write a Python program to do a case-insensitive string replacement.
 */

// my solution
let text = "PHP Exercises";
let re = /\b[A-Z]+\b/g;
text = text.replace(re, (chr) => chr.toLowerCase());
console.log(text);
