/**
 * Write a JavaScript program to create a new string from a given string taking
 * the last 3 characters and added at both the front and back.
 * The string length must be 3 or more.
 */

// my solution

function front_back3(str) {
  if (str.length < 3) return str;
  let last_three = str.slice(-3);
  return last_three + str + last_three;
}

console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));

// or

function front_back(str) {
  if (str.length < 3) return str;
  let last_three = str.substring(str.length - 3);
  return last_three + str + last_three;
}

console.log(front_back("abcd"));
