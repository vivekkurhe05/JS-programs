/**
 * Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
 */

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1 = arr1.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  else return 0;
});

console.log(arr1);
