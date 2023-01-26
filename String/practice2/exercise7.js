/**
 * Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
 */

// my solution
function string_parameterize(str) {
  return str
    .split(" ")
    .map((el) => {
      return el.toLowerCase();
    })
    .join("-");
}
console.log(string_parameterize("Robin Singh from USA."));

// or my solution

function string_parameterize2(str) {
  let re = /[A-Z]+/g;
  return str
    .replace(re, function (chr) {
      return chr.toLowerCase();
    })
    .split(" ")
    .join("-");
}
console.log(string_parameterize2("Robin Singh from USA."));
