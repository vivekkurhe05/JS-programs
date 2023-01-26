/**
 * Write a JavaScript program to check whether 1 appears in first or
 * last position of a given array of integers.
 * The array length must be greater or equal to 1.
 */

// my solution

function first_last_1(arr) {
  if (arr[0] == 1 || arr[arr.length - 1] == 1) return true;
  return false;
}
console.log(first_last_1([1, 3, 5]));
console.log(first_last_1([1, 3, 5, 1]));
console.log(first_last_1([2, 4, 6]));
