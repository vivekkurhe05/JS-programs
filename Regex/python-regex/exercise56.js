/**
 * Write a Python program that takes any number of iterable objects or objects with a length property and returns the longest one.
 */

function longest_item() {
  let args = Array.prototype.slice.call(arguments);

  var max = args[0].length;
  args.map(function (elem) {
    max = Math.max(max, elem.length);
    return max;
  });
  result = args.filter(function (elem) {
    return elem.length == max;
  });
  return typeof result[0] === "string" ? result.join("") : result[0];
}

console.log(longest_item("Red", "Green", "Black", "Orange"));
console.log(longest_item([1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(longest_item([1, 2, 3], "Java"));
console.log(longest_item([10, 100], "Python"));
