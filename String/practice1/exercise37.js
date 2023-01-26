/**
 * Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison. Go to the editor
Test Data :
console.log(compare_strings('abcd', 'AbcD'));
true
console.log(compare_strings('ABCD', 'Abce'));
false
 */

// my solution

function compare_strings(str1, str2) {
  return str1 === str2.toLowerCase() ? true : false;
}
console.log(compare_strings("abcd", "AbcD"));
console.log(compare_strings("ABCD", "Abce"));
