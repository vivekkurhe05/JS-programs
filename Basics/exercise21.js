/**
 * Write a JavaScript program to create a new string adding "Py" in front of a given string.
 * If the given string begins with "Py" then return the original string.
 */

// my solution

function string_check(str) {
  if (str.startsWith("Py")) return str;
  else return "Py" + str;
}

console.log(string_check("Python"));
console.log(string_check("thon"));

// or
// your solution

function string_check2(str) {
  if (str.substr(0, 2) != "Py") return "Py" + str;
  else return str;
}

console.log(string_check2("Python"));
console.log(string_check2("thon"));
