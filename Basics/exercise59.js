/**
 * Write a JavaScript program to extract the first half of a string of even length.
 */

// my solution

function first_half(str) {
  if (str.length % 2 === 1) return str;
  else return str.substring(0, str.length / 2);
}

console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));
