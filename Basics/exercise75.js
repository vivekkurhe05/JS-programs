/**
 * Write a JavaScript program to create a new array taking
 * the middle elements of the two arrays of integer and each length 3.
 */

// my solution

function middle_elements(arr1, arr2) {
  let arr3 = [];
  arr3.push(arr1[Math.floor(arr1.length / 2)]);
  arr3.push(arr2[Math.floor(arr2.length / 2)]);
  return arr3;
}
console.log(middle_elements([1, 2, 3], [1, 5, 6]));
console.log(middle_elements([3, 3, 3], [2, 8, 0]));
console.log(middle_elements([4, 2, 7], [2, 4, 5]));
