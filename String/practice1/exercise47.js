/**
 * Write a JavaScript function to test whether a string ends with a specified string. Go to the editor
Test Data :
console.log(endsWith('JS string exercises', 'exercises'));
 */

// my solution

function endsWith(str, sub_str) {
  return str.slice(-sub_str.length) === sub_str;
}
console.log(endsWith("JS string exercises", "exercises"));
