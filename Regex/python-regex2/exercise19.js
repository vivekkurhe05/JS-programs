/**
 * Write a Python program to search some literals strings in a string.
Sample text : 'The quick brown fox jumps over the lazy dog.'
Searched words : 'fox', 'dog', 'horse'

output:
Searching for fox in The quick brown fox jumps over the lazy dog. => Matched
Searching for dog in The quick brown fox jumps over the lazy dog. => Matched
Searching for horse in The quick brown fox jumps over the lazy dog. => Not Matched
 */

// Note
function text_match(elem) {
  if (str.search(new RegExp(elem, "g")) !== -1) {
    console.log(
      `Searching for ${elem} in The quick brown fox jumps over the lazy dog. => Matched`
    );
  } else {
    console.log(
      `Searching for ${elem} in The quick brown fox jumps over the lazy dog. => Not Matched`
    );
  }
}

let str = "The quick brown fox jumps over the lazy dog.";
let arr = ["fox", "dog", "horse"];
for (let i = 0; i < arr.length; i++) {
  text_match(arr[i]);
}
