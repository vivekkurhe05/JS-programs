/**
 * Write a Python program to split a string with multiple delimiters.
 */

// not a proper solution
let text = "The quick brown\nfox jumps*over the lazy dog.";
let re = /[A-Za-z0-9\s]*(?=\\n)|(?<=\\n)[A-Za-z0-9\s]*|(?<=\*)[A-Za-z0-9\s]*/g;
let arr = text.match(re);
console.log(arr);
