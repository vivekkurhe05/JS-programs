/**
 * Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

// my solution
function swapcase(str) {
  return str.split("").map((chr) => {
    return chr === chr.toUpperCase() ? chr.toLowerCase() : chr.toUpperCase();
  });
}
console.log(swapcase("AaBbc"));
