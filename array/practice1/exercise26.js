/**
 * Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
 */

// my solution
let numbers = [10, 20, 10, 40, 50, 60, 70],
  target = 50;

for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] + numbers[i + 1] === target) {
    console.log(i + ", " + (i + 1));
  }
}
