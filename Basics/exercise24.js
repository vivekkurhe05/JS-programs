/**
 * Write a JavaScript program to create a new string from a given string with the
 * first character of the given string added at the front and back.
 */

// my solution

function front_back(str) {
  return str[0] + str + str[0];
}

console.log(front_back("a"));
console.log(front_back("ab"));
console.log(front_back("abc"));
