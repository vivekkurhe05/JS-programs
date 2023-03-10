/**
 * Write a JavaScript function to remove the first occurrence of a given 'search string' from a string. Go to the editor
Test Data :
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
Output :
"The quick brown fox jumps over lazy dog"
 */

// my solution

function remove_first_occurrence(str, occ) {
  return (
    str.substring(0, str.indexOf(occ)) +
    str.substring(str.indexOf(occ) + occ.length + 1)
  );
}
console.log(
  remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
);
