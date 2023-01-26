/**
 * Write a Python program to concatenate the consecutive numbers in a given string.
 * 
Original string:
Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.
After concatenating the consecutive numbers in the said string:
Enter at 120 Kearny Street. The security desk can direct you to floor 16. Please have your identification ready.
 */

//my solution
let str =
  "Enter at 1 20 Kearny Street. The security desk can direct you to floor 1 6. Please have your identification ready.";

let re = /(?<=\d)\s(?=\d)/g;
console.log(str.replace(re, ""));
