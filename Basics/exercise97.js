/**
 * Write a JavaScript program to find the shortest possible string which can create a string
 * to make it a palindrome by adding characters to the end of it.
 */

// my soution is not holistic

function build_Palindrome(str) {
  let a = str.indexOf(str[str.length - 1]);
  let b = str.substr(a, str.length);
  let first_part = str.substring(0, str.indexOf(b));
  return str + first_part.split("").reverse().join("");
}

console.log(build_Palindrome("abcddc"));
console.log(build_Palindrome("122"));
console.log(build_Palindrome("abrabba")); // it should return abrabbarba
