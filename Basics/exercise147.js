/**
 * Write a JavaScript program to compute the sum of all digits that occur in a given string.
 */

// my solution

function sum_digits_from_string(str) {
  return str.match(/[0-9]/g).reduce((acc, el) => {
    return acc + parseInt(el);
  }, 0);
}

console.log(sum_digits_from_string("abcd12efg9"));
console.log(sum_digits_from_string("w3resource"));
