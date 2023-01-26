/**
 * Write a JavaScript program to create new string with first 3 characters are in lower case from a given string.
 * If the string length is less than 3 convert all the characters in upper case.
 */

// my solution

function upper_lower(str) {
  if (str.length < 3) return str.toUpperCase();
  return str.substring(0, 3).toLowerCase() + str.substring(3);
}

console.log(upper_lower("Python"));
console.log(upper_lower("Py"));
console.log(upper_lower("JAVAScript"));
