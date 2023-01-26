/**
 * Write a JavaScript function to test whether the character at the provided (character) index is upper case. Go to the editor
Test Data :
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
false
 */

// my solution
function isUpperCaseAt(str, index) {
  return str[index] === str[index].toUpperCase() ? true : false;
}
console.log(isUpperCaseAt("Js STRING EXERCISES", 1));
