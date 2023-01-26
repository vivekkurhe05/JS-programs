/**
 * Check two given strings are isomorphic in JavaScript

 */

function isIsomorphic(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let temp = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    temp.push([arr1[i], arr2[i]]);
  }

  return temp;
}

console.log(isIsomorphic("ABCA", "XYZX"));
