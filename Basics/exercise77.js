/**
 * Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
 */

function contains13(arr) {
  return arr.indexOf(1) != -1 || arr.indexOf(3) != -1;
}
console.log(contains13([1, 5]));
console.log(contains13([2, 3]));
console.log(contains13([7, 5]));

// or my solution

function contains13(arr) {
  return arr.includes(1) == true || arr.includes(3) == true;
}
console.log(contains13([1, 5]));
console.log(contains13([2, 3]));
console.log(contains13([7, 5]));
