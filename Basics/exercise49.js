/**
 * Write a JavaScript program to replace every character in a given string
 * with the character following it in the alphabet.
 */

// my solution

function LetterChanges(str) {
  let arr1 = str.split("");
  let arr2 = [];
  str = "";
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "Z" || arr1[i] == "z") arr2.push(arr1[i].charCodeAt() - 25);
    else arr2.push(arr1[i].charCodeAt() + 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    str += String.fromCharCode(arr2[i]);
  }
  return str;
}

console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));
console.log(LetterChanges("XYZ"));
