/**
 * Write a Python program to remove lowercase substrings from a given string.
 */

let str1 = "KDeoALOklOOHserfLoAJSIskdsf";
let re = /[^A-Z]/g;
str1 = str1.replace(re, "");
console.log(str1);
