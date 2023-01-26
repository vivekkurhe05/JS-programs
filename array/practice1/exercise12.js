/**
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

// my solution
function computeSumAndProduct(arr) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    product *= arr[i];
  }

  return "Sum is " + sum + " Product is " + product;
}

console.log(computeSumAndProduct([1, 2, 3, 4, 5, 6]));
