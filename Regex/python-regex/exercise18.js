/**
 * Write a Python program to search the numbers (0-9) of length between 1 to 3 in a given string.
 */

function get_num(str) {
  let regex = /[0-9]+/g;
  return str.match(regex);
}

console.log(get_num("Exercises number 1, 12, 13, and 345 are important"));
