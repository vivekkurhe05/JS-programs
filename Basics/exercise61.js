/**
 * Write a JavaScript program to concatenate two strings except their first character.
 */

// my solution

function concatenate(str1, str2) {
  return str1.substring(1).concat(str2.substring(1));
}

console.log(concatenate("PHP", "JS"));
console.log(concatenate("A", "B"));
console.log(concatenate("AA", "BB"));
