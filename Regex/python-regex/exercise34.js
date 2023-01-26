/**
 * Write a Python program to find all three, four, five characters long words in a string.
 */

let text = "The quick brown fox jumps over the lazy dog.";
let reg = /\w{3,5}/g;
console.log(text.match(reg));
