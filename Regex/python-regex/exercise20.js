/**
 * Write a Python program to search a literals string in a string and also find the location within the original string where the pattern occurs.

Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox'
 */

let text = "The quick brown fox jumps over the lazy dog.";
let pattern = /fox/g;
let match;
let matches = [];

do {
  match = pattern.exec(text);
  if (match) {
    matches.push(match);
  }
} while (match != null);

console.log(
  `Found "${matches[0][0]}" in "${text}" from ${matches[0].index} to ${
    matches[0].index + matches[0][0].length
  }`
);
