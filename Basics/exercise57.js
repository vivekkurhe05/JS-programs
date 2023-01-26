/**
 * Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
 */

// my solution

function string_copies(str, num) {
  if (num < 0 || num === 0) return str;
  return str.repeat(num);
}

console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2));

// or
// my solution

function string_copies_2(str, num) {
  return new Array(num + 1).join(str);
}

console.log(string_copies_2("abc", 5));
console.log(string_copies_2("abc", 0));
