/**
 * Write a JavaScript function to strip leading and trailing spaces from a string. Go to the editor
Test Data :
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));
Output :
"w3resource"
"w3resource"
"w3resource"
 */

// my solution

function strip(str) {
  return str.replace(/^\s+|\s+$/g, "");
}

console.log(strip("w3resource "));
console.log(strip(" w3resource"));
console.log(strip("     w3resource "));
