/**
 * Write a JavaScript program to find the larger value between the first or
 * last and set all the other elements with that value. Display the new array.
 */

// my solution

function all_max(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[arr.length - 1]) {
      arr2.push(arr[0]);
    } else {
      arr2.push(arr[arr.length - 1]);
    }
  }
  return arr2;
}
console.log(all_max([20, 30, 40]));
console.log(all_max([-7, -9, 0]));
console.log(all_max([12, 10, 3]));
