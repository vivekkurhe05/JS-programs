/**
 * Write a Python program to convert a date of yyyy-mm-dd format to dd-mm-yyyy format.
 */

function change_data_format(str) {
  let regex = /(\d{1,4})-(\d{1,2})-(\d{1,2})/g;
  return str.replace(regex, "$3-$2-$1");
}

console.log(change_data_format("2026-01-02"));
