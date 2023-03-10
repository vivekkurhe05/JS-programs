/**
 * Write a JavaScript program to create a new string of 4 copies of the
 * last 3 characters of a given original string.
 * The length of the given string must be 3 and above.
 */

// my solution

function newstring(str) {
  if (str.length >= 3) return str.slice(-3).repeat(4);
  else return false;
}

console.log(newstring("Python 3.0"));
console.log(newstring("JS"));
console.log(newstring("JavaScript"));
