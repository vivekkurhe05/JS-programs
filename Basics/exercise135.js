/**
 * Write a JavaScript program to remove all characters from a given string that appear more than once
 * output:
 * d
 * python
 *
 * 364
 */

// my solution

function remove_duplicate_cchars(str) {
  let arr1 = [],
    arr2 = [];

  for (let i = 0; i < str.length; i++) {
    let substr = str.substring(str.indexOf(str[i]) + 1);
    if (!arr1.includes(str[i]) && substr.includes(str[i])) {
      arr1.push(str[i]);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (!arr1.includes(str[i])) arr2.push(str[i]);
  }

  return arr2.join("");
}

console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));

// or w3resource solution

function remove_duplicate_cchars2(str) {
  let substr = "";

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) substr += str[i];
  }

  return substr;
}

console.log(remove_duplicate_cchars2("abcdabc"));
console.log(remove_duplicate_cchars2("python"));
console.log(remove_duplicate_cchars2("abcabc"));
console.log(remove_duplicate_cchars2("1365451"));
