/**
 * Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */

// my solution using regex
// function swap_case(str) {
//   return str.replace(/[a-zA-Z]/g, function (chr) {
//     return chr == chr.toLowerCase() ? chr.toUpperCase() : chr.toLowerCase();
//   });
// }

// console.log(swap_case("The Quick Brown Fox"));

// or

function swap_case(str) {
  let str2 = str.split(" ");
  return str2.join("");
}

console.log(swap_case("The Quick Brown Fox"));
