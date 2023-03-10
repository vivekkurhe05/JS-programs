/**
 * Write a JavaScript function to create a case-insensitive search. Go to the editor
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"
 */

// my solution

function case_insensitive_search(str, srch_str) {
  return new RegExp(srch_str, "i").test(str) ? "Matched" : "Not Matched";
}
console.log(case_insensitive_search("JavaScript Exercises", "exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercises"));
console.log(case_insensitive_search("JavaScript Exercises", "Exercisess"));
