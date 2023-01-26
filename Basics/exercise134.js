/**
 * Write a JavaScript program to change the characters (lower case) in a string where
 * a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.
 */

// w3resource solution

function change_char(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let char_order = str.charCodeAt(i) - "a".charCodeAt(),
      change_char = 25 - char_order + "a".charCodeAt();

    result.push(String.fromCharCode(change_char));
  }

  return result.join("");
}

console.log(change_char("abcxyz"));
console.log(change_char("python"));
