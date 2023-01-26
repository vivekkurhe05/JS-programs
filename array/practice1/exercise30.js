/**
 * Write a JavaScript function to merge two arrays and removes all duplicates elements from array1.

Test data :
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1]
 */

// my solution
function merge_array(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  return Array.from(new Set(arr3));
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));

// or

function merge_array2(arr1, arr2) {
  let a1 = arr1.length;
  let a2 = arr2.length;
  let arr3 = [];

  for (let i = 0; i < Math.max(a1, a2); i++) {
    if (arr2.includes(arr1[i])) continue;
    else {
      arr3.push(arr1[i]);
    }
  }

  return arr3;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array2(array1, array2));
