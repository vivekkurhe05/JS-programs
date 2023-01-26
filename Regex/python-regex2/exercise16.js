/**
 * Write a Python program to remove leading zeros from an IP address.
 */

// my solution
function remove_zeros(str) {
  let arr = str.split(".");
  let re = /^0/;
  return arr
    .map((el) => {
      return el.replace(re, "");
    })
    .join(".");
}

console.log(remove_zeros("216.08.094.196"));

// or my solution 2

function remove_zeros2(str) {
  let re = /(?<=\.)0/g;
  return str.replace(re, "");
}

console.log(remove_zeros("216.000.08.094.196"));
