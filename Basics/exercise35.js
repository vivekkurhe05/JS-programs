/**
 * Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
 */

// my solution

function check_char(str, chr) {
  if (str.length >= 5) return str.substring(2, 5).includes(chr);
}

console.log(check_char("Python", "y"));
console.log(check_char("JavaScript", "a"));
console.log(check_char("Console", "o"));
console.log(check_char("Console", "C"));
console.log(check_char("Console", "e"));
console.log(check_char("JavaScript", "S"));

// or
// my solution

function check_char2(str, chr) {
  let index = str.indexOf(chr, 2);

  if (index >= 2 && index <= 4) return true;
  return false;
}

console.log(check_char2("Python", "y"));
console.log(check_char2("JavaScript", "a"));
console.log(check_char2("Console", "o"));
console.log(check_char2("Console", "C"));
console.log(check_char2("Console", "e"));
console.log(check_char2("JavaScript", "S"));
