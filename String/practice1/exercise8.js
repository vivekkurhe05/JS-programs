/**
 * Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
 */

// my solution

function capitalize(str) {
  return str.replace(/^\w/, function (el) {
    return el[0].toUpperCase();
  });
}
console.log(capitalize("js string exercises"));
