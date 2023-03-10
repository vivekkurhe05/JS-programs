/**
 * Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
 */

function first(arr, num) {
  if (num == null) {
    return arr[0];
  }
  if (num < 0) return [];

  return arr.slice(0, num);
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7,9,0]
console.log(first([7, 9, 0, -2], 6)); // [7,9,0,-2]
console.log(first([7, 9, 0, -2], -3)); // []
