/**
 * Write a Python program to remove lowercase substrings from a given string.
 */

// my solution
let str1 = "KDeoALOklOOHserfLoAJSIskdsf";
let re = /[a-z]/g;
str1 = str1.replace(re, "");
console.log(str1);
