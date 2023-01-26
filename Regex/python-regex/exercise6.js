/**
 * Write a Python program that matches a string that has an a followed by two to three 'b'.
 */

function text_match(str) {
  let regex = /^ab{2,3}$/;
  return regex.test(str);
}

console.log(text_match("ab"));
console.log(text_match("aabbbbbc"));
