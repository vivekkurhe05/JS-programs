/**
 * Write a JavaScript program to convert the letters of a given string in alphabetical order.
 */

// my solution

function alphabet_Soup(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_Soup("Python"));
console.log(alphabet_Soup("Exercises"));
