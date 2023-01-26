/**
 * Write a Python program to check a decimal with a precision of 2.
 */

// my solution
function is_decimal(input) {
  let re = /^[0-9]+(\.\d{1,2})?$/g;
  return re.test(input);
}

console.log(is_decimal("123.11")); // true
console.log(is_decimal("123.1")); // true
console.log(is_decimal("123")); // true
console.log(is_decimal("0.21")); // true

console.log(is_decimal("123.1214")); // false
console.log(is_decimal("3.124587")); // false
console.log(is_decimal("e666.86")); // false
