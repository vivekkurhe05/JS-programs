/**
 * Write a Python program to convert a date of yyyy-mm-dd format to dd-mm-yyyy format.
 */

// my solution
function change_data_format(str) {
  let re = /(\d{4})-(\d{1,2})-(\d{1,2})/g;
  return str.replace(re, "$3-$2-$1");
}

console.log(change_data_format("2026-01-02"));
