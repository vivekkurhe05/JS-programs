/**
 * Write a Python program to find all three, four, five characters long words in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.";
let re = /\w{3,5}/g;
let matches = text.match(re);
console.log(matches);
