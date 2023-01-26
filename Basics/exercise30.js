/**
 * Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string,
 * if "Script" presents in the string return the string without "Script" otherwise return the original one.
 *
 */

// my solution

function check_script(str) {
  return str.indexOf("Script") === 4
    ? str.substring(0, str.indexOf("Script"))
    : str;
}
console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));
