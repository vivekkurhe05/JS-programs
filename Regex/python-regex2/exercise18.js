/**
 * Write a Python program to search the numbers (0-9) of length between 1 to 3 in a given string.
 */

// my solution
function get_num(str) {
  let re = /\d{1,3}/g;
  return str.match(re);
}

console.log(get_num("Exercises number 1, 12, 13, and 345 are important"));
