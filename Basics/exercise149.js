/**
 * Write a JavaScript program to change the capitalization of all letters in a given string.
 */

// my solution

function change_case(str) {
  return str.replace(/[a-z]/g, function (el) {
    return el.toLocaleUpperCase();
  });
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));
