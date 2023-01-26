/**
 * Write a JavaScript function to create a Zerofilled value with optional +, - sign. Go to the editor
Test Data :
console.log(zeroFill(120, 5, '-'));
"+00120"
console.log(zeroFill(29, 4));
"0029"
 */

// my solution

function zeroFill(num1, len, sign) {
  while (len > num1.toString().length) {
    num1 = "0" + num1;
  }
  if (sign === "-") {
    num1 = "+" + num1;
  }
  return num1;
}
console.log(zeroFill(120, 5, "-"));
console.log(zeroFill(29, 4));
