/**
 * Write a JavaScript program to check whether a given string contains equal number of p's and t's.
 */

// my solution

function equal_pt(str) {
  let count_p = 0,
    count_t = 0;

  let index_p = str.indexOf("p", 0);
  let index_t = str.indexOf("t", 0);

  while (index_p != -1) {
    count_p++;
    index_p = str.indexOf("p", index_p + 1);
  }

  while (index_t != -1) {
    count_t++;
    index_t = str.indexOf("t", index_t + 1);
  }

  return count_p === count_t;
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatps"));
console.log(equal_pt("pppttt"));
