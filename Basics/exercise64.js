/**
 * Write a JavaScript program to concatenate two strings and return the result.
 * If the length of the strings are not same then remove the characters from the longer string.
 */

// my solution

function str_con_cat(str1, str2) {
  if (str1.length > str2.length) return str1.slice(-str2.length).concat(str2);
  else return str1.concat(str2.slice(-str1.length));
}
console.log(str_con_cat("Python", "JS"));
console.log(str_con_cat("ab", "cdef"));
