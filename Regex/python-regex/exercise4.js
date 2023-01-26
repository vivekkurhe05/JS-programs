// Write a Python program that matches a string that has an a followed by zero or one 'b'.

function text_match(str) {
  let regex = /^ab?$/;
  return regex.test(str);
}

console.log(text_match("ab"));
console.log(text_match("abc"));
console.log(text_match("abbc"));
console.log(text_match("aabbc"));
