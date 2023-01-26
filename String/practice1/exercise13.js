/**
 * Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
 */

// my solution

function repeat(str, num) {
  if (num === undefined) num = 1;
  return new Array(num + 1).join(str);
}
console.log(repeat("Ha!"));
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
