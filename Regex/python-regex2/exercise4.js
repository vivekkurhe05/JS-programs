// Write a Python program that matches a string that has an a followed by zero or one 'b'.

// my solution
function text_match(str) {
  let re = /ab?$/;
  return re.test(str);
}

console.log(text_match("ab")); // true
console.log(text_match("abc")); // false
console.log(text_match("abbc")); // false
console.log(text_match("aabbc")); // false
