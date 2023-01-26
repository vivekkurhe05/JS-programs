/**
 * Write a Python program to extract values between quotation marks of a string.
 */

let text1 = '"Python", "PHP", "Java"';

let arr = text1.match(/\w+/g);
console.log(arr);
