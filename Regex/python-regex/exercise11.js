/**
 * Write a Python program that matches a word at the end of string, with optional punctuation.
 */

function text_match(str) {
  let regex = /[a-zA-Z]+\.?$/;
  return regex.test(str);
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("The quick brown fox jumps over the lazy dog. ")); // false
console.log(text_match("The quick brown fox jumps over the lazy dog ")); // false
