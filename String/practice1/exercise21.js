/**
 * Write a JavaScript function to repeat a string a specified times. Go to the editor
Test Data :
console.log(repeat_string('a', 4));
console.log(repeat_string('a'));
Output :
"aaaa"
"Error in string or count."
 */

// my solution

function repeat_string(str, num) {
  if (num === undefined) return "Error in string count.";
  return str.repeat(num);
}
console.log(repeat_string("a", 4));
console.log(repeat_string("a"));
