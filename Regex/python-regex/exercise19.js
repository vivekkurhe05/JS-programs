/**
 * Write a Python program to search some literals strings in a string.
Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox', 'dog', 'horse'
 */

let arr = ["fox", "dog", "horse"];
let text = "The quick brown fox jumps over the lazy dog.";

for (let i = 0; i < arr.length; i++) {
  if (text.search(new RegExp(arr[i], "g")) != -1) {
    console.log(
      "Searching for " +
        arr[i] +
        " in The quick brown fox jumps over the lazy dog. => Matched"
    );
  } else {
    console.log(
      "Searching for " +
        arr[i] +
        " in The quick brown fox jumps over the lazy dog. => Not Matched"
    );
  }
}
