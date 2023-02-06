/**
 * Write a Java program to count the number of decimal places in a given number.
 */

// my solution
function validate(str) {
    let re = /(?<=\.)\d+/g;
    let match = str.match(re)
    if(match) return match[0].split("").length;
    else return 0;
}

console.log("Original Number: 123");
console.log(validate("123")); // 0

console.log("Original Number: 123.3");
console.log(validate("123.3")); // 1

console.log("Original Number: 123.03");
console.log(validate("123.03")); // 2

console.log("Original Number: 123.223");
console.log(validate("123.223")); // 3
