/***
 * Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
 */

// my solution

function starts_with(str) {
  return str.startsWith("Java");
}

console.log(starts_with("Java"));
console.log(starts_with("JavaScript"));
console.log(starts_with("Python"));

// or
// my solution

function starts_with1(str) {
  return str.indexOf("Java") === 0;
}

console.log(starts_with1("Java"));
console.log(starts_with1("JavaScript"));
console.log(starts_with1("Python"));
