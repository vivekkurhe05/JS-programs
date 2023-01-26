/**
 * Write a JavaScript program to compute the sum of three elements of a
 * given array of integers of length 3.
 */

// my solution

function sum_three(arr) {
  return arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
}

console.log(sum_three([10, 32, 20]));
console.log(sum_three([5, 7, 9]));
console.log(sum_three([0, 8, -11]));
