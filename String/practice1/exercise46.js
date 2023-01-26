/**
 * Write a JavaScript function to test whether a string starts with a specified string. Go to the editor
Test Data :
console.log(startsWith('js string exercises', 'js'));
 */

// my solution

function startsWith(str, sub_str) {
  return str.indexOf(sub_str) === 0;
}
console.log(startsWith("js string exercises", "js"));
