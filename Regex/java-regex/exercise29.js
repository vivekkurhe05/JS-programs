/**
 * Write a Java program to check if a given string is a Mathematical Expression or not.
 */

function validate(exp) {
  //   return re.test(exp);
}

console.log(validate("10")); // true
console.log(validate("10 + 20")); // true
console.log(validate("10 * 20 * 30")); // true
console.log(validate("-10 * 20 - -30")); // true
console.log(validate("-10 * 20 - -2e4")); // true
console.log(validate("100 +")); // false
console.log(validate("100 + foo")); // false
console.log(validate("10 *+ 20 * 30")); // false
