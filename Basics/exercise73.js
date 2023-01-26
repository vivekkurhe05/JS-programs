/**
 * Write a JavaScript program to reverse the elements
 * of a given array of integers length 3.
 */

// my solution
function reverse3(arr) {
  return arr.reverse();
}
console.log(reverse3([5, 4, 3]));
console.log(reverse3([1, 0, -1]));
console.log(reverse3([2, 3, 1]));

// or

function reverse3(arr) {
  return arr.map((el, idx, arr) => arr[arr.length - 1 - idx]);
}
console.log(reverse3([5, 4, 3]));
console.log(reverse3([1, 0, -1]));
console.log(reverse3([2, 3, 1]));
