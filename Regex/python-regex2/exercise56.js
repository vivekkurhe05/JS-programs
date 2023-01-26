/**
 * Write a Python program that takes any number of iterable objects or objects with a length property and returns the longest one.
 */

// Note
function longest_item() {
  let arr = Array.prototype.slice.call(arguments);

  var max = arr[0].length;
  arr.map(function (elem) {
    max = Math.max(max, elem.length);
    return max;
  });
  result = arr.filter(function (elem) {
    return elem.length == max;
  });
  return result[0];
}

console.log(longest_item("Red", "Green", "Black", "Orange"));
console.log(longest_item([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(longest_item([1, 2, 3], "Java"));
console.log(longest_item([10, 100], "Python"));
