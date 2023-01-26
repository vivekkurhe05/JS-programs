/**
 * Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
 */

// my solution
// same as 49

function alphabet_char_Shift(str) {
  let arr1 = str.trim().split("");
  let arr2 = [];
  str = "";

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == "z" || arr1[i] == "Z") {
      arr2.push(arr1[i].charCodeAt() - 25);
    } else {
      arr2.push(arr1[i].charCodeAt() + 1);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    str += String.fromCharCode(arr2[i]);
  }
  return str;
}

console.log(alphabet_char_Shift("abcdxyz"));
