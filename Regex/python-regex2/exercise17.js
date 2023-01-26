/**
 * Write a Python program to check for a number at the end of a string.
 */

// my solution
function end_num(str) {
  let re = /(\w+)*\d$/;
  return re.test(str);
}

console.log(end_num("abcdef")); // false
console.log(end_num("abcdef6")); // true
