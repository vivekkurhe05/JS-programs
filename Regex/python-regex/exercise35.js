/**
 * Write a Python program to find all words which are at least 4 characters long in a string.
 */

let text = "The quick brown fox jumps over the lazy dog he.";
let reg = /\w{4,}/g;

console.log(text.match(reg));
