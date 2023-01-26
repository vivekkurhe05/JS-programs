/**
 * Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
 */

// my solution
function abbrev_name(str) {
  let str_arr = str.split(" ");
  return `${str_arr[0]} ${str_arr[1][0]}.`;
}

console.log(abbrev_name("Robin Singh"));
