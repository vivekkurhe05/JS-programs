/**
 * Write a JavaScript program to check whether the characters a and b are separated
 * by exactly 3 places anywhere (at least once) in a given string.
 */

// my solution

function ab_Check(str) {
  let substr = str.substring(str.indexOf("a") + 1, str.indexOf("b"));
  return substr.length == 3;
}

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));
