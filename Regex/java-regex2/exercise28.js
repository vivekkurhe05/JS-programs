/**
 * Write a Java program to reverse the words of length higher than 3 in a given string.
 */

// my solution
function validate(str) {

  str = str.split(" ");

  return str.map(el => {
    if(el.length > 3) return el.split(" ").reverse(" ").join(" ").split("").reverse("").join("")
    else return el;
  }).join(" ");
}

console.log(
    validate("Add a dash before and after every vowel in the said string:")
  );
  console.log(validate("The quick brown fox jumps over the lazy dog."));