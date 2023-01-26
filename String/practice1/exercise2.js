/**
 * Write a JavaScript function to check whether a string is blank or not. Go to the editor
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
 */

// my solution

function is_Blank(str) {
  if (str.length === 0) return true;
  else return false;
}
console.log(is_Blank(""));
console.log(is_Blank("abc"));
