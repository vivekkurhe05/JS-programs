/**
 * Write a Java program to remove the specific letters from a string and return the new string. 
 * Specific letters: "p", "q", or "r".

If the given string does not contain "p", "q", or "r", return “Not found.”
 */

// my solution
function validate(str) {
    let re = /[pqr]/g;
    if(str.search(re) === -1) return "Not found.";
    return str.replace(re, "");
}

console.log(validate("The quick brown fox jumps over the lazy dog."));
console.log(validate("Java Exercises."));
console.log(validate("Java linkedlist."));
