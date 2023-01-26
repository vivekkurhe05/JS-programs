/**
 * Write a Python program to remove words from a string of length between 1 and a given number.
 */

// my solution
function remove_words(str, num) {
  let re = new RegExp("\\b\\w{1," + num + "}\\b", "g");
  str = str.replace(re, "").replace(/\s+/g, " ");
  return str;
}

let text = "The quick brown fox jumps over the lazy dog.";
console.log(remove_words(text, 3));
console.log(remove_words(text, 4));
