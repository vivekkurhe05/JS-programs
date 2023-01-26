/**
 * Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1
 */

// my solution

function count(main_str, sub_str, flag) {
  let count = 0;
  if (flag === undefined) flag = true;
  if (flag) return main_str.match(new RegExp(sub_str, "gi")).length;
  else return main_str.match(new RegExp(sub_str, "g")).length;
}
console.log(count("The quick brown fox jumps over the lazy dog", "the"));
console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));
