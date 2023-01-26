/**
 * Write a JavaScript program to check whether the first and last elements
 * are equal of a given array of integers length 3.
 */

// my solution

function first_last_same(arr) {
  if (arr.length >= 3) return arr[0] === arr[arr.length - 1];
}
console.log(first_last_same([10, 20, 30]));
console.log(first_last_same([10, 20, 30, 10]));
console.log(first_last_same([20, 20, 20]));
