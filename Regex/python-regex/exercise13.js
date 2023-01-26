/**
 * Write a Python program that matches a word containing 'z', not at the start or end of the word.
 */

function text_match(str) {
  let regex = /\Bz\B/g;
  return regex.test(str);
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false
