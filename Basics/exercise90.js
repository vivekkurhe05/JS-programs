/**
 * Write a JavaScript program to find the kth greatest element of a given array of integers.
 */

// my solution

function Kth_greatest_in_array(arr, k) {
  return arr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    else return 0;
  })[k - 1];
}

console.log(Kth_greatest_in_array([1, 2, 6, 4, 5], 3));
console.log(Kth_greatest_in_array([-10, -25, -47, -36, 0], 1));
