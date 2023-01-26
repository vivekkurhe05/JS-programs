/**
 * Write a Python program to extract values between quotation marks of a string.
 */

// my solution
let text1 = '"Python", "PHP", "Java"';
let re = /\w+/g;
let matches = text1.match(re);
console.log(matches.join(", "));
