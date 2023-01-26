/**
 * Write a Python program to remove the parenthesis area in a string.
Sample data : ["example (.com)", "w3resource", "github (.com)", "stackoverflow (.com)"]
 */

// Note
function remove_paren(arr) {
  return arr.map((el) => {
    let re = /\s?\(.+\)/g;
    return el.replace(re, "");
  });
}

let data = [
  "example (.com)",
  "w3resource",
  "github (.com)",
  "stackoverflow (.com)",
];

console.log(remove_paren(data));
