/**
 * Write a Python program to check that a string contains only a certain set of characters (in this case a-z, A-Z and 0-9)
 */

function is_allowed_specific_char(str) {
  let regex = /[a-zA-Z0-9]/g;
  return regex.test(str);
}

console.log(is_allowed_specific_char("ABCDEFabcdef123450"));
console.log(is_allowed_specific_char("*&%@#!}{"));

// or

function is_allowed_specific_char(str) {
  let regex = /\w/g;
  return regex.test(str);
}

console.log(is_allowed_specific_char("ABCDEFabcdef123450"));
console.log(is_allowed_specific_char("*&%@#!}{"));
