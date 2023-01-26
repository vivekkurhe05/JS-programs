/***
 * Write a JavaScript program to capitalize the first letter of each word of a given string.
 */

// my solution

function capital_letter(str) {
  return str
    .split(" ")
    .map((el) => el[0].toUpperCase() + el.substring(1))
    .join(" ");
}

console.log(
  capital_letter(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);
