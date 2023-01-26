/**
 * Write a Python program to insert spaces between words starting with capital letters.
 */

function capital_words_spaces(str) {
  let re = /[A-Z][a-z]+/g;
  return str.match(re).join(" ");
}

console.log(capital_words_spaces("Python"));
console.log(capital_words_spaces("PythonExercises"));
console.log(capital_words_spaces("PythonExercisesPracticeSolution"));
