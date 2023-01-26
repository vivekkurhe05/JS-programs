/**
 * Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
 */

// my solution
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

let setObj = new Set(Mynum);

Mynum = Array.from(setObj);
console.log(Mynum);

// or my solution 2

var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let arr = [];

for (let i = 0; i < Mynum.length; i++) {
  if (!arr.includes(Mynum[i])) arr.push(Mynum[i]);
}
console.log(arr.sort((a, b) => a - b));
