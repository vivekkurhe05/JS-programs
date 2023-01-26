/**
 * Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
 */

// my solution
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize("js string exercises"));
