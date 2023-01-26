/**
 * Write a Python program to do a case-insensitive string replacement.
 */

let text = "PHP Exercises";
let re = /[A-Z][A-Z]+/g;
text = text.replace(re, (chr) => chr.toLowerCase());
console.log(text);
