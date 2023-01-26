/**
 * Write a JavaScript function to test whether the character at the provided (character) index is lower case. Go to the editor
Test Data :
console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
true
 */

// my solution

function isLowerCaseAt(str, index) {
  return str[index] === str[index].toLowerCase() ? true : false;
}
console.log(isLowerCaseAt("Js STRING EXERCISES", 1));
