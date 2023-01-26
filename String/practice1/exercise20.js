/**
 * Write a JavaScript function that can pad (left, right) a string to get to a determined length.
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output :
"0123"
"12300000"
 */

// my solution

function formatted_string(str, num, pos) {
  if (pos === "l") return str.substring(num.toString().length) + num;
  else return num + str.substring(num.toString().length);
}
console.log(formatted_string("0000", 123, "l"));
console.log(formatted_string("00000000", 12345, ""));
