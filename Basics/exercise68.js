/**
 * Write a JavaScript program to create a new string
 * using the first and last n characters from a given sting.
 * The string length must be greater or equal to n.
 */

// my solution

function two_string(str, n) {
  if (str.length >= n) return str.slice(0, n) + str.slice(-n);
  else return false;
}

console.log(two_string("JavaScript", 2));
console.log(two_string("JavaScript", 3));
