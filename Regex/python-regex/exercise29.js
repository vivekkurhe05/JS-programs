/**
 * Write a Python program to separate and print the numbers and their position of a given string.
 */

function print_num_and_pos(str) {
  let regex = /\d+/g;
  let match;
  let matches = [];

  do {
    match = regex.exec(str);
    if (match) {
      matches.push(match);
    }
  } while (match != null);

  return matches
    .map((el) => {
      return "Number is " + el[0] + " and it's pos is " + el.index;
    })
    .join("\n");
}

let text =
  "The following example creates an ArrayList with a capacity of 50 elements. Four elements are then added to the ArrayList and the ArrayList is 22 trimmed accordingly.";

console.log(print_num_and_pos(text));
