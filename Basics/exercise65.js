/**
 * Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
 */

// my solution

function end_script(str) {
  return str.endsWith("Script");
}

console.log(end_script("JavaScript"));
console.log(end_script("Java Script"));
console.log(end_script("Java Scripts"));

// or
// my solution

function end_script2(str) {
  return str.substring(str.indexOf("Script")) === "Script";
}

console.log(end_script2("JavaScript"));
console.log(end_script2("Java Script"));
console.log(end_script2("Java Scripts"));
