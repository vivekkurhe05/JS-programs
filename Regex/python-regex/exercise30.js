/**
 * Write a Python program to abbreviate 'Road' as 'Rd.' in a given string.
 */

let street = "21 Ramkrishna Road";

let regex = /Road/;
console.log(street.replace(regex, "Rd."));
