/*
Write a Python program to separate and print the numbers of a given string.
*/

function print_num(str) {
  let regex = /\d+/g;
  return str.match(regex);
}

let text = "Ten 10, Twenty 20, Thirty 30";
console.log(print_num(text));
