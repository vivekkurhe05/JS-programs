/**
 * Write a JavaScript function to check whether an `input` is a string or not. Go to the editor
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
 */

// my solution

function is_string(str) {
  if (Object.prototype.toString.call(str) === "[object String]") return true;
  else return false;
}
console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));
