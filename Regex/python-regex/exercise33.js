/**
 * Write a Python program to find all five characters long word in a string.
 */

let text = "The quick brown fox jumps over the lazy dog.";
let reg = /\w{5}/g;
console.log(text.match(reg));
