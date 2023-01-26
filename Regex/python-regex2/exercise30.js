/**
 * Write a Python program to abbreviate 'Road' as 'Rd.' in a given string.
 */

let street = "21 Ramkrishna Road";

let re = /road/i;

let abbr = street.replace(re, "Rd.");
console.log(abbr);
