/**
 * Write a JavaScript program to create a new array taking the first and last elements
 * from a given array of integers and length must be greater or equal to 1.
 */

// my solution

function started(arr) {
  let arr2 = [];
  arr2.push(arr[0], arr[arr.length - 1]);
  return arr2;
}
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));
