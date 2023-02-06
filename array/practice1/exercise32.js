/**
 *  Write a JavaScript function to find an array contains a specific element.
 * Test data :
arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]
 */

// my solution
function contains(arr, ele) {
    return arr.includes(ele)
}

arr = [2, 5, 9, 6];
console.log(contains(arr, 5));