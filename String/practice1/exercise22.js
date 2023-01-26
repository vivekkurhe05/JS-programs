/**
 * Write a JavaScript function to get a part of a string after a specified character.Go to the editor
Test Data :
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
Output :
"w3resource"
"xercises"
 */

// my solution

function subStrAfterChars(str, sep, chr) {
  if (chr === "a") {
    return str.substring(0, str.indexOf(sep));
  } else {
    return str.substring(str.indexOf(sep) + 1);
  }
}
console.log(subStrAfterChars("w3resource: JavaScript Exercises", ":", "a"));
console.log(subStrAfterChars("w3resource: JavaScript Exercises", "E", "b"));
