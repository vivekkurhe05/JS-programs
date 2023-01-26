/**
 * Write a Python program to find the substrings within a string.
Sample text :
'Python exercises, PHP exercises, C# exercises'
Pattern :
'exercises'
Note: There are two instances of exercises in the input string.
 */

function text_match(str) {
  let re = /exercises/g;
  return str.match(re);
}

console.log(text_match("Python exercises, PHP exercises, C# exercises"));
