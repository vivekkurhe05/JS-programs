/**
 * Write a Python program to find all adverbs and their positions in a given sentence.
Sample text : "Clearly, he has no excuse for such behavior."
 */

let text = "Clearly, he has no excuse for such behavior slowly.";
let re = /\w+ly\b/g;
let match;
let matches = [];

do {
  match = re.exec(text);
  if (match) {
    matches.push(match);
  }
} while (match != null);

console.log(matches);
