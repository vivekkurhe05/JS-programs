/**
 * Write a JavaScript code to divide a given array of positive integers into two parts.
 * First element goes to first part, second element goes to second part,
 * and third element goes to first part and so on.
 * Now compute the sum of two parts and store into an array of size two.
 */

// my solution

function alternate_Sums(arr) {
  let newArr = [],
    evenSum = 0,
    oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  newArr.push(evenSum, oddSum);
  return newArr;
}
console.log(alternate_Sums([1, 3, 6, 2, 5, 10]));
