/**
 * Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
 */

// my solution
function string_to_array(str) {
  return str.split(" ");
}
console.log(string_to_array("Robin Singh"));

// or my solution

function string_to_array2(str) {
  let re = /\w+/g;
  return str.match(re);
}
console.log(string_to_array2("Robin Singh"));
