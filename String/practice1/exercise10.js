/**
 * Write a JavaScript function that takes a string which has lower and upper case letters 
 * as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

// my solution

function swapcase(str) {
  return str
    .split("")
    .map((el) => {
      if (el.toLowerCase() === el) return el.toUpperCase();
      else return el.toLowerCase();
    })
    .join("");
}
console.log(swapcase("AaBbc"));
