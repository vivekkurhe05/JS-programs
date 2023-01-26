/**
 * Write a Python program to remove words from a string of length between 1 and a given number.
 */

let text = "The quick brown fox jumps over the lazy dog.";
let re = /\b\w{1,3}\b/g;
text = text.replace(re, "").replace(/\s+/g, " ");
console.log(text);
