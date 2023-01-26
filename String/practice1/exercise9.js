/**
 * Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */

// my solution

function capitalize_Words(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
}

console.log(capitalize_Words("js string exercises"));
