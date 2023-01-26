/**
 * Write a JavaScript function to Uncapitalize? the first character of a string. Go to the editor
Test Data :
console.log(Uncapitalize('Js string exercises'));
"js string exercises"
 */

// my solution

function Uncapitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
console.log(Uncapitalize("Js string exercises"));
