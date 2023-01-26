/**
 * Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
 */

// my solution

function is13(arr) {
  if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) {
    return true;
  } else return false;
}
console.log(is13([7, 8]));
console.log(is13([3, 2]));
console.log(is13([0, 1]));
