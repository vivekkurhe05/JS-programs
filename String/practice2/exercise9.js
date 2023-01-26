/**
 * Write a JavaScript function to capitalize the first letter of each word in a string. Go to the editor
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */

// my solution
function capitalize_Words(str) {
  let re = /\b[a-z]/g;
  return str.replace(re, (chr) => chr.toUpperCase());
}
console.log(capitalize_Words("js string exercises"));

// or my solution
function capitalize_Words2(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
}
console.log(capitalize_Words2("js string exercises"));
