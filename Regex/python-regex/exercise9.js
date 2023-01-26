/**
 * Write a Python program that matches a string that has an 'a' followed by anything, ending in 'b'.
 */

function text_match(str) {
  let regex = /^a.+b$/;
  return regex.test(str);
}

console.log(text_match("aabbbbd")); // false
console.log(text_match("aabAbbbc")); // false
console.log(text_match("accddbbjjjb")); // true
