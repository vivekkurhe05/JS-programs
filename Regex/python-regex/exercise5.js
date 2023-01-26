/**
 * Write a Python program that matches a string that has an a followed by three 'b'.
 */

function text_match(str) {
  let regex = /^ab{3}$/;
  return regex.test(str);
}

console.log(text_match("abbb"));
console.log(text_match("aabbbbbc"));
