/**
 * Write a JavaScript function to convert a string to title case. Go to the editor
Test Data :
console.log(sentenceCase('PHP exercises. python exercises.'));
"Php Exercises. Python Exercises."
 */

// my solution

function sentenceCase(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
}
console.log(sentenceCase("PHP exercises. python exercises."));
