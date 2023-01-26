/**
 * Write a Python program to remove leading zeros from an IP address.
 */

function remove_zeros(str) {
  return str
    .split(".")
    .map((el) => el.replace(/^0|0$/g, ""))
    .join(".");
}

console.log(remove_zeros("216.08.094.196"));
