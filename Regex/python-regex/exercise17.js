/**
 * Write a Python program to check for a number at the end of a string.
 */

function end_num(str) {
  let regex = /[a-z]+[0-9]$/gi;
  return regex.test(str);
}

console.log(end_num("abcdef")); // false
console.log(end_num("abcdef6")); // true
