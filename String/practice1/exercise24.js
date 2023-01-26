/**
 * Write a JavaScript function to truncate a string to a certain number of words. Go to the editor
Test Data :
console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
Output :
"The quick brown fox"
 */

// my solution

function truncate(str, num) {
  return str.split(" ", num).join(" ");
}
console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
