/**
 * Write a JavaScript program to reverse a given string.
 */

// my solution

function string_reverse(str) {
  return str.trim().split("").reverse().join("");
}

console.log(string_reverse("w3resource"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
