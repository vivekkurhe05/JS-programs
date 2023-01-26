/**
 * Write a Python program to find all words which are at least 4 characters long in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog he.";
let re = /\w{4,}/g;
let matches = text.match(re);
console.log(matches);
