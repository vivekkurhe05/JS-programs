/**
 * Write a Python program that matches a word at the beginning of a string.
 */

function text_match(str) {
  let regex = /^[a-zA-Z]+/;
  return regex.test(str);
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match(" The quick brown fox jumps over the lazy dog.")); // false
