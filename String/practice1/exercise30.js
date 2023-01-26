/**
 * Write a JavaScript function check if a string ends with specified suffix. Go to the editor
Test Data :
console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
true
console.log(string_endsWith('JS PHP PYTHON',''));
false
 */

// my solution

function string_endsWith(str, word) {
  if (word.length === 0) return false;
  return str.endsWith(word);
}
console.log(string_endsWith("JS PHP PYTHON", "PYTHON"));
console.log(string_endsWith("JS PHP PYTHON", ""));
