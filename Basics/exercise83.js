/**
 * Write a JavaScript to find the longest string from a given array of strings.
 */

// my solution

function longest_string(arr) {
  return Array.of(
    arr.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      else return 0;
    })[arr.length - 1]
  );
}
console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));
