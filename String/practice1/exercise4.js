/**
 * Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
 */

// my solution

function truncate_string(str, num) {
  return str.substr(0, num);
}

console.log(truncate_string("Robin Singh", 4));
